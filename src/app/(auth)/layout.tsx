import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | Syed M Hafiz Firdaus",
  robots: { index: false, follow: false },
  description: "Secure administrative login demo utilizing Next.js Route Groups.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
