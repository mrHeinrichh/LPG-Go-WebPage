import { redirect } from "next/navigation";

export default function LegacyEmergencyPage() {
  redirect("/safety/emergency");
}
