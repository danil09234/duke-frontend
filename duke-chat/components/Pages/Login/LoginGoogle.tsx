"use client";

import React, { useTransition } from "react";

const LoginGoogle = () => {
  const [isPending, startTransition] = useTransition();

  const handleGoogleLogin = () => {
    startTransition(async () => {
      // await signInWithGithub();
    });
  };
  return (
    <div
      onClick={handleGoogleLogin}
      className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-gray-800 rounded-md p-4 flex justify-center items-center"
    >
      <p className="text-white">
        {isPending ? "Redirecting..." : "Login with Google"}
      </p>
    </div>
  );
};

export default LoginGoogle;
