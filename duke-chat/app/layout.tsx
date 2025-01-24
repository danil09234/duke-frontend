"use client";

import localFont from "next/font/local";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import Chats from "@/components/Pages/ChatsPage/ChatsPage";
import LibraryPage from "@/components/Pages/LibraryPage/LibraryPage";
import ChatPage from "@/components/Pages/ChatPage/ChatPage";
import FindProgram from "@/components/Pages/FindProgramPage/FindProgram";
import { Sidebar } from "@/components/Sidebar/Sidebar";

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
      <head>
        <title>DUKE Assistant</title>
        <meta name="description" content="TUKE Application Assistant" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <Sidebar>
          <Routes>
            <Route path="/" element={<Chats />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/chats/*" element={<ChatPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/find-program" element={<FindProgram />} />
            <Route path="*" element={<Chats />} />
          </Routes>
        </Sidebar>
      </body>
    </html>
  );
}
