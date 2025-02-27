import LoginGoogle from "@/components/Pages/Login/LoginGoogle";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="w-full flex mt-20 justify-center">
        <section className="flex flex-col w-[400px]">
          <h1 className="text-3xl w-full text-center font-bold mb-6">
            Sign in
          </h1>
          <LoginGoogle />
        </section>
      </div>
    </>
  );
}
