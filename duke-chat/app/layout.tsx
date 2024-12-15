import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import localFont from "next/font/local";
import "./globals.css";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import { MobileSidebar } from "@/components/Sidebar/MobileSidebar";
import ClientRouter from "@/components/ClientRouter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DUKE Assistant",
  description: "TUKE Application Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="flex flex-col md:flex-row min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1">
              <header className="md:hidden">
                <MobileSidebar />
              </header>
              <main>{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
