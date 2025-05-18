"use client";

import { signInWithGoogle } from "@/actions/auth";
import React, { useTransition } from "react";

const LoginGoogle = () => {
  const [isPending, startTransition] = useTransition();

  const handleGoogleLogin = () => {
    startTransition(async () => {
      await signInWithGoogle();
    });
  };

  return (
    <div
      onClick={handleGoogleLogin}
      className="gap-2 hover:cursor-pointer bg-[#FF4100] justify-center inline-flex items-center hover:bg-[#FF4100]/90 text-white font-bold border-none font-display-1-medium text-[14px] rounded-[10px] px-4 py-3 w-[280px]"
    >
      <img
        src="/resources/icon-google.svg"
        alt="Google Icon"
        className="h-[15px] w-[15px] text-white"
      />
      <p>{isPending ? "Presmerovanie..." : "Pokračovať cez Google"}</p>
    </div>
  );
};

export default LoginGoogle;
