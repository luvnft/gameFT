import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GameFI",
  description:
    "GameFI: Transforming gaming with ERC-6551 NFTs. Play, collect, and unlock unique features. Join the future of GameFi now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
