import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Custom404() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="mt-[20vh] text-center flex flex-col gap-[32px] w-full px-5">
        <div className="self-center text-[32px] text-[#19213D] font-bold leading-tight max-w-[660px] w-full">
          Whoops táto stránka nie je k dispozícii 😵‍💫
        </div>
        <Link href="/">
          <Button className="inline-flex items-center gap-1 bg-[#FF4100] hover:bg-[#FF4100]/90 text-white border-none font-display-1-medium text-xs font-medium rounded-[8px]">
            <span>Prejsť na hlavnú</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
