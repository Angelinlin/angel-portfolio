import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import { NavigationMenuDemo } from "@/components/component/Navbar/NavBar";
import CursorProvider from "@/components/ui/CursorProvider";
import { Footer } from "@/components/component/footer";
import ToasterProv from "@/components/ui/ToasterProv";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Angel Cervantes - portfolio",
  description: "A portfolio website for Angelinlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-neutral-900 font-sans antialiased overflow-x-hidden",
        fontSans.variable
      )}>
        {/* <CursorProvider> */}
        <ToasterProv>
          <NavigationMenuDemo />
          {children}
          {/* </CursorProvider> */}
          <Footer />
        </ToasterProv>
      </body>
    </html>
  );
}
