import policy from "@/config/refund-policy.json";

export type ComplaintCategory = "PRODUCT" | "DELIVERY" | "CUSTOMER" | "OTHER";
export type PaymentMethod = "ONLINE" | "COD" | "ANY";
export type EscrowState = "PENDING" | "RELEASED" | "DEALER_FUNDS_EXHAUSTED";

export type ComplaintReason = {
  code: string;
  label_en: string;
  category: ComplaintCategory;
  fault_party: string;
  claim_window_hours: number | null;
  evidence_required?: boolean;
  evidence_types?: string[];
  allowed_resolutions: string[];
  default_resolution: string;
  tank_retrieval_required?: boolean;
  safety_priority?: boolean;
  show_safety_advisory?: boolean;
  safety_advisory_en?: string;
  applies_to_payment?: string[];
};

export type RefundDestination = {
  code: string;
  label_en: string;
  processing_days_min: number;
  processing_days_max: number;
  is_default?: boolean;
};

export type RefundPolicyConfig = typeof policy & {
  complaint_reasons: ComplaintReason[];
  refund_destinations: RefundDestination[];
};

export const refundPolicy = policy as RefundPolicyConfig;

export const getReasonsByCategory = (category: ComplaintCategory) =>
  refundPolicy.complaint_reasons.filter((reason) => reason.category === category);

export const getReasonByCode = (code: string) =>
  refundPolicy.complaint_reasons.find((reason) => reason.code === code);

export const isWithinClaimWindow = (
  reason: ComplaintReason,
  deliveredAt: Date,
  now = new Date()
) => {
  if (reason.claim_window_hours == null) return true;
  if (reason.claim_window_hours <= 0) return false;
  const deadline = deliveredAt.getTime() + reason.claim_window_hours * 60 * 60 * 1000;
  return now.getTime() <= deadline;
};

export const getAllowedResolutions = (reasonCode: string) =>
  getReasonByCode(reasonCode)?.allowed_resolutions ?? [];

export const getFundingSource = (
  paymentMethod: PaymentMethod,
  escrowState?: EscrowState,
  dealerSccBalance = 0
) => {
  if (dealerSccBalance < 0) {
    return refundPolicy.refund_funding_matrix.find(
      (row) => row.escrow_state === "DEALER_FUNDS_EXHAUSTED"
    );
  }

  return refundPolicy.refund_funding_matrix.find((row) => {
    const methodMatches = row.payment_method === paymentMethod || row.payment_method === "ANY";
    const escrowMatches = !row.escrow_state || row.escrow_state === escrowState;
    return methodMatches && escrowMatches;
  });
};

export const getRefundDestinations = (paymentMethod: PaymentMethod, orderStatus: string) => {
  const destinations = [...refundPolicy.refund_destinations];
  if (paymentMethod === "COD" && orderStatus !== "Completed") {
    return [
      {
        code: "CASH_ON_PICKUP",
        label_en: "Cash on pickup",
        processing_days_min: 0,
        processing_days_max: 0,
        is_default: true,
      },
      ...destinations,
    ];
  }
  return destinations;
};
