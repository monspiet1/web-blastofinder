import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/custom-ui/Footer";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { useSession } from "@lib/auth_client";
import HeaderLogged from "@/components/custom-ui/HeaderLogged";
import HeaderNoLogged from "@/components/custom-ui/HeaderNoLogged";
import { auth } from "@lib/auth";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        
            {session ? <HeaderLogged session={session} /> : <HeaderNoLogged />}
              <main className="flex-1">
                {children}
              </main>
            <Toaster />
          <Footer/>
        
      </body>
    </html>
  );
}
