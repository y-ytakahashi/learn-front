import "normalize.css";
import "../styles/globals.scss";
import styles from "./layout.module.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
// import { AuthProvider } from "@/context/auth/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "basic sns",
  description: "I made it while watching the Udemy course"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* AuthProvider いらないのでは？*/}
        {/*<AuthProvider>*/}
        <Navbar />
        <div className={styles.container}>{children}</div>
        {/*</AuthProvider>*/}
      </body>
    </html>
  );
}
