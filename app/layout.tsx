import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Dr. Ladipo | Plastic & Aesthetic Surgery", template: "%s | Dr. Ladipo" },
  description: "Dr. Ladipo's modern plastic and aesthetic surgery practice in Roswell, Atlanta.",
  metadataBase: new URL("https://www.drladipo.com"),
};

/* Runs before first paint: marks that JS is available (scroll-reveal only hides content when it is)
   and applies a remembered theme so there is no flash. */
const themeInit = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("drladipo-theme");if(t==="light"||t==="dark"){d.setAttribute("data-theme",t)}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
