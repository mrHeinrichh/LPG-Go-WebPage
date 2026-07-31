// =============================================================================
// Central site configuration.
// Edit this file to update contact details, developer credit, support links,
// and the donation / "support the project" QR codes.
// =============================================================================

export const site = {
  name: "LPG Go",
  tagline: "LPG marketplace and delivery coordination in the Philippines",
  description:
    "LPG Go is a marketplace platform that connects customers with independent LPG dealers/retailers and delivery riders. We help facilitate orders, delivery coordination, and payments, while LPG products are sold and fulfilled by participating dealers/retailers.",
  url: "https://lpg-go.vercel.app",
  email: "lpggo.philippines@gmail.com",
  locale: "en_PH",
} as const;

// ---------------------------------------------------------------------------
// Developer credit - shown in the footer and the support section.
// ---------------------------------------------------------------------------
export const developer = {
  name: "Ascend One Technologies Inc.",
  role: "Developer & Maintainer",
  website: "https://mrheinrich.vercel.app",
  email: "mrheinrichhh@gmail.com",
} as const;

// ---------------------------------------------------------------------------
// Social links - official LPG Go accounts. Surfaced in the footer + contact.
// ---------------------------------------------------------------------------
export const social = {
  facebook: "https://www.facebook.com/lpggo.ph",
} as const;

// ---------------------------------------------------------------------------
// App screenshots - App Store marketing shots shown in the "See it in action"
// showcase. Images live in `public/screenshots/`.
// ---------------------------------------------------------------------------
export const screenshots = [
  { src: "/screenshots/1.png", title: "Delivered to your door", caption: "On-demand LPG gas brought straight to your home." },
  { src: "/screenshots/2.png", title: "Pick a nearby store", caption: "Choose a participating dealer/retailer, brand, and tank size." },
  { src: "/screenshots/3.png", title: "Track your rider", caption: "Follow your delivery live on the map in real time." },
  { src: "/screenshots/4.png", title: "Scan to order", caption: "Scan a store's QR to order again in seconds." },
  { src: "/screenshots/5.png", title: "Review payment options", caption: "Use Cash on Delivery or a supported online option when available." },
  { src: "/screenshots/6.png", title: "All your orders", caption: "Every order, status, and receipt in one place." },
] as const;

// ---------------------------------------------------------------------------
// App download - early-access APK + store availability.
// The APK is served from `public/downloads/lpg-go-android.apk`.
// ---------------------------------------------------------------------------
export const appDownload = {
  apkUrl: "/downloads/lpg-go-android.apk",
  apkSize: "90.0 MB",
  apkAvailable: false,
  apkSha256:
    "12ab28e1a14660f141e31f410a30c6eeb1e07cc87b81bfb6b1375ee66bce902e",
  stores: [
    { id: "play", name: "Google Play", caption: "Coming soon on" },
    { id: "ios", name: "App Store", caption: "Coming soon on" },
  ],
} as const;

// ---------------------------------------------------------------------------
// Support links - surfaced in the Contact + Support sections and the footer.
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
// so nothing ever appears broken - drop the real screenshot in and it swaps in
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
    accountNumber: "**** 9469",
    network: "InstaPay",
    description:
      "Scan with any InstaPay-enabled bank or e-wallet app (GCash, Maya, BPI, etc.) to send your support to this GoTyme Bank account. Transfer fees may apply.",
    qrValue:
      "GoTyme Bank | Support LPG Go | Jhan Elrie Bibangco | InstaPay | https://mrheinrich.vercel.app",
    qrImage: "/qr/gotyme.png",
  },
  {
    id: "maribank-julina",
    brand: "MariBank",
    accent: "#F47B20",
    accountName: "Julina Marie Bibangco",
    accountNumber: "MariBank **** 5833",
    network: "InstaPay",
    description:
      "Scan with any InstaPay app to support via MariBank.",
    qrValue:
      "MariBank | Support LPG Go | Julina Marie Bibangco | InstaPay | https://mrheinrich.vercel.app",
    qrImage: "/qr/maribank-julina.png",
  },
  {
    id: "maribank-john",
    brand: "MariBank",
    accent: "#F47B20",
    accountName: "John Heinrich Fabros",
    accountNumber: "MariBank **** 6493",
    network: "InstaPay",
    description:
      "Scan with any InstaPay app to support via MariBank.",
    qrValue:
      "MariBank | Support LPG Go | John Heinrich Fabros | InstaPay | https://mrheinrich.vercel.app",
    qrImage: "/qr/maribank-john.png",
    referral: { code: "JF905180", perk: "Get PHP 150 when you sign up with this code" },
  },
];

export const navLinks = [
  { href: "/#how", label: "How it works" },
  { href: "/safety", label: "Safety" },
  { href: "/#features", label: "Features" },
  { href: "/#partners", label: "Dealers/Retailers & Riders" },
  { href: "/policy/refund-policy", label: "Policies" },
  { href: "/#faq", label: "FAQ" },
];

export const coverageAreas = [
  "Nearby participating dealers/retailers",
  "Metro Manila-ready",
  "Province expansion",
  "Dealer/retailer-led delivery zones",
] as const;

export const testimonials = [
  {
    name: "Customer household",
    role: "Home cooking refill",
    quote:
      "The app makes it easier to see the order status, selected store, price, and available delivery updates.",
  },
  {
    name: "Local dealer/retailer",
    role: "Participating LPG seller",
    quote:
      "Orders, riders, products, vouchers, and Store Service Credit (SCC) activity can be managed from one dashboard.",
  },
  {
    name: "Delivery rider",
    role: "Dealer/retailer rider",
    quote:
      "The pickup, drop-off, proof photo, and customer contact flow make delivery coordination clearer.",
  },
] as const;
