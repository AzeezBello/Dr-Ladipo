import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata={title:{default:"Dr. Ladipo | Plastic & Aesthetic Surgery","template":"%s | Dr. Ladipo"},description:"Dr. Ladipo's modern plastic and aesthetic surgery practice in Roswell, Atlanta.",metadataBase:new URL("https://www.drladipo.com")};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/>{children}<SiteFooter/></body></html>}
