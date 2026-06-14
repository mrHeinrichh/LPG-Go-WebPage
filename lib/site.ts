// =============================================================================
// Central site configuration.
// Edit this file to update contact details, developer credit, support links,
// and the donation / "support the project" QR codes.
// =============================================================================

export const site = {
  name: "LPG Go",
  tagline: "On-demand LPG delivery in the Philippines",
  description:
    "LPG Go connects Filipino households with verified local LPG dealers for fast, trackable cooking-gas delivery. Order refills or new tanks, pay cash or online, and track your rider in real time.",
  url: "https://lpg-go.vercel.app",
  email: "mrheinrichhh@gmail.com",
  locale: "en_PH",
} as const;

// ---------------------------------------------------------------------------
// Developer credit — shown in the footer and the support section.
// ---------------------------------------------------------------------------
export const developer = {
  name: "mrheinrichhh",
  role: "Developer & Maintainer",
  website: "https://mrheinrich.vercel.app",
  email: "mrheinrichhh@gmail.com",
} as const;

// ---------------------------------------------------------------------------
// App download — early-access APK + store availability.
// Replace `apkUrl` with your real early-access APK link (e.g. a GitHub release,
// Firebase App Distribution, or Google Drive direct-download link).
// ---------------------------------------------------------------------------
export const appDownload = {
  apkUrl: "#", // ← TODO: put your early-access .apk download URL here
  stores: [
    { id: "play", name: "Google Play", caption: "Coming soon on" },
    { id: "ios", name: "App Store", caption: "Coming soon on" },
  ],
} as const;

// ---------------------------------------------------------------------------
// Support links — surfaced in the Contact + Support sections and the footer.
// ---------------------------------------------------------------------------
export type SupportLink = {
  label: string;
  description: string;
  href: string;
  external?: boolean;
};

export const supportLinks: SupportLink[] = [
  {
    label: "Email support",
    description: "Order help, partnerships, or account questions.",
    href: `mailto:${site.email}`,
  },
  {
    label: "In-app Support Feedback",
    description: "The fastest way to get help with an active order.",
    href: "#contact",
  },
  {
    label: "Developer portfolio",
    description: "Meet the developer behind LPG Go.",
    href: developer.website,
    external: true,
  },
];

// ---------------------------------------------------------------------------
// Donation / "Support the project" payment methods.
//
// Each card shows a real bank QR. The image lives in `public/qr/<id>.png`.
// Until that file exists, a placeholder QR (from `qrValue`) is shown instead,
// so nothing ever appears broken — drop the real screenshot in and it swaps in
// automatically (see `qrImage` handling in components/Support.tsx).
//
// To update: replace the screenshots in `public/qr/`, or edit the fields below.
// ---------------------------------------------------------------------------
export type SupportMethod = {
  id: string;
  brand: string;
  accent: string; // brand color for the card header
  accountName: string;
  accountNumber: string; // masked account reference shown on the card
  network: string; // payment rail, e.g. "InstaPay"
  description: string;
  qrValue: string; // placeholder payload, used only if the QR image is missing
  qrImage: string; // path under /public to the real QR screenshot
  referral?: { code: string; perk: string }; // optional sign-up referral
};

export const supportMethods: SupportMethod[] = [
  {
    id: "gotyme",
    brand: "GoTyme Bank",
    accent: "#0AA6B8",
    accountName: "Jhan Elrie Bibangco",
    accountNumber: "•••• 9469",
    network: "InstaPay",
    description:
      "Scan with any InstaPay-enabled bank or e-wallet app (GCash, Maya, BPI, etc.) to send your support to this GoTyme Bank account. Transfer fees may apply.",
    qrValue:
      "GoTyme Bank • Support LPG Go • Jhan Elrie Bibangco • InstaPay • https://mrheinrich.vercel.app",
    qrImage: "/qr/gotyme.png",
  },
  {
    id: "maribank-julina",
    brand: "MariBank",
    accent: "#F47B20",
    accountName: "Julina Marie Bibangco",
    accountNumber: "MariBank •••• 5833",
    network: "InstaPay",
    description:
      "Scan with any InstaPay app to support via MariBank.",
    qrValue:
      "MariBank • Support LPG Go • Julina Marie Bibangco • InstaPay • https://mrheinrich.vercel.app",
    qrImage: "/qr/maribank-julina.png",
  },
  {
    id: "maribank-john",
    brand: "MariBank",
    accent: "#F47B20",
    accountName: "John Heinrich Fabros",
    accountNumber: "MariBank •••• 6493",
    network: "InstaPay",
    description:
      "Scan with any InstaPay app to support via MariBank.",
    qrValue:
      "MariBank • Support LPG Go • John Heinrich Fabros • InstaPay • https://mrheinrich.vercel.app",
    qrImage: "/qr/maribank-john.png",
    referral: { code: "JF905180", perk: "Get ₱150 when you sign up with this code" },
  },
];

export const navLinks = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
  { href: "#support", label: "Support" },
  { href: "#contact", label: "Contact" },
];
