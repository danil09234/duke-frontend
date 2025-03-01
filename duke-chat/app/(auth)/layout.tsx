"use client";

import { useEffect, useState } from "react";
import { getUserSession } from "@/actions/auth";
import { redirect, usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchUserSession = async () => {
      const response = await getUserSession();
      setUser(response?.user);
    };

    fetchUserSession();
  }, []);

  useEffect(() => {
    if (user && ["/login", "/auth", "/error"].includes(pathname)) {
      redirect("/");
    }
  }, [user, pathname]);

  return <>{children}</>;
}
