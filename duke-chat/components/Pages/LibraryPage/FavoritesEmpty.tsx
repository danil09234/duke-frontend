import * as React from "react";
import { ArrowRightIcon } from "lucide-react";
import LibraryEmptyState from "./LibraryEmptyState";

export const FavoritesEmpty: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center max-w-[854px]">
      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-2.5 items-center w-full font-medium leading-tight max-md:max-w-full">
          <div className="flex-1 shrink self-stretch my-auto text-lg basis-0 text-slate-800 max-md:max-w-full">
            Všetky chaty
          </div>
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto text-xs text-center text-blue-500">
            <div className="self-stretch my-auto">Zobraziť všetky </div>
            <ArrowRightIcon className="w-4 " />
          </div>
        </div>
        <div className="w-fill mt-6">
          <LibraryEmptyState />
        </div>
      </div>
    </div>
  );
};
