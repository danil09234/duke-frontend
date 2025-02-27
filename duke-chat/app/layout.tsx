"use client";

import localFont from "next/font/local";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import Chats from "@/components/Pages/ChatsPage/ChatsPage";
import LibraryPage from "@/components/Pages/LibraryPage/LibraryPage";
import ChatPage from "@/components/Pages/ChatPage/ChatPage";
import FindProgram from "@/components/Pages/FindProgramPage/FindProgram";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import LoginPage from "@/components/Pages/Login/page";
import { usePathname } from "next/navigation";
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

export default function RootLayout() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <html lang="en">
      <head>
        <title>DUKE Assistant</title>
        <meta name="description" content="TUKE Application Assistant" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <ClientRouter>
          {isLoginPage ? (
            <Routes>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          ) : (
            <Sidebar>
              <Routes>
                <Route path="/" element={<Chats />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/chats/*" element={<ChatPage />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/find-program" element={<FindProgram />} />
                <Route path="*" element={<Chats />} />
              </Routes>
            </Sidebar>
          )}
        </ClientRouter>
      </body>
    </html>
  );
}
