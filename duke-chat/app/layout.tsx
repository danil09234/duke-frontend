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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <SidebarProvider>
          <div className="flex flex-col md:flex-row h-full min-h-screen w-full">
            <AppSidebar />
            <div className="fles flex-col flex-1">
              <header className="md:hidden h-[60px] flex-shrink-0">
                <MobileSidebar />
              </header>
              <main className="overflow-auto scrollbar-hide h-[calc(100vh-60px)] md:h-[100vh]">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
