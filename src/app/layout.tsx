import {  Inter, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/custom-ui/Footer";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import HeaderLogged from "@/components/custom-ui/HeaderLogged";
import HeaderNoLogged from "@/components/custom-ui/HeaderNoLogged";
import { auth } from "@lib/auth";
import { headers } from "next/headers";


const inter = Inter({
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  subsets:["latin"]
})

const sourceSans3 = Source_Sans_3({
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans-3",
  subsets:["latin"]
})

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
        className={`${sourceSans3.className} antialiased `}
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
