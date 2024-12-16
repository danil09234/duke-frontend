"use client";

import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import localFont from "next/font/local";
import "./globals.css";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import { MobileSidebar } from "@/components/Sidebar/MobileSidebar";
import ClientRouter from "@/components/ClientRouter";
import { Route, Routes } from "react-router-dom";
import Chats from "@/components/Pages/ChatsPage/ChatsPage";
import LibraryPage from "@/components/Pages/LibraryPage/LibraryPage";
import ChatPage from "@/components/Pages/ChatPage/ChatPage";
import Head from "next/head";

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

export default function RootLayout() {
  return (
    <html lang="en">
      <Head>
        <title>DUKE Assistant</title>
        <meta name="description" content="TUKE Application Assistant" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <SidebarProvider>
          <ClientRouter>
            <div className="flex flex-col md:flex-row h-full min-h-screen w-full">
              <AppSidebar />
              <div className="fles flex-col flex-1">
                <header className="md:hidden h-[73px] flex-shrink-0">
                  <MobileSidebar />
                </header>
                <main className="overflow-auto scrollbar-hide h-[calc(100vh-73px)] md:h-[100vh]">
                  <Routes>
                    <Route path="/" element={<Chats />} />
                    <Route path="/chats" element={<Chats />} />
                    <Route path="/chats/chat1234" element={<ChatPage />} />
                    <Route path="/library" element={<LibraryPage />} />
                  </Routes>
                </main>
              </div>
            </div>
          </ClientRouter>
        </SidebarProvider>
      </body>
    </html>
  );
}
