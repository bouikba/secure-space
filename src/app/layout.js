import { Quicksand } from "next/font/google";
import { AuthProvider } from "@/components"
import "./globals.css";
const font = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Secure Space",
  description: "Get ready to take control of your security! Explore the latest security technologies with us today. Modern solutions, effective protection, and guaranteed safety. Join us now and be part of the advanced security community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
