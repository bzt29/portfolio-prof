import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | S. M. Hafiz F. Syed",
  description: "Secure administrative login demo utilizing Next.js Route Groups.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
