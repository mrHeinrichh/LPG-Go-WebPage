import { NextResponse } from "next/server";
import policy from "@/config/refund-policy.json";

export function GET() {
  return NextResponse.json(policy, {
    headers: {
      "content-disposition": 'attachment; filename="refund-policy.json"',
    },
  });
}
