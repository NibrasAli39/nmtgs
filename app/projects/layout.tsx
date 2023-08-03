import "../globals.css";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NMTGS",
  description: "Your ideas transformed through tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
