import { NextResponse } from "next/server";
import policy from "@/config/refund-policy.json";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(policy, {
    headers: {
      "content-disposition": 'attachment; filename="refund-policy.json"',
      "cache-control": "no-store, max-age=0",
      "x-lpg-go-policy-version": policy.version,
      "x-lpg-go-policy-effective-date": policy.effective_date,
    },
  });
}
