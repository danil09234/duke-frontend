import LoginGoogle from "@/components/Pages/Login/LoginGoogle";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white gap-[100px]">
      <img
        src="/resources/logo-full-extended-duke.svg"
        className="mt-[4vh] w-auto h-auto max-w-full max-h-[200px] mx-auto"
      />
      <div className="items-center text-center flex flex-col gap-[32px] w-full px-5">
        <div className="flex flex-col w-full max-w-[484px] text-center">
          <div className="self-center text-[32px] text-[#19213D] font-bold leading-tight w-full">
            Vitajte na DUKE 👋🏻
          </div>
          <div className="mt-2 text-sm text-slate-500 w-full">
            Chat asistent pre uchádzačov a študentov na Technickej univerzity v
            Košiciach – všetko, čo potrebujete vedieť!
          </div>
        </div>
        <LoginGoogle />
      </div>
    </div>
  );
}
