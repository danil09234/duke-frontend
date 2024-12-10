import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";

const chatData = {
  title: "Čo chceš vedieť o univerzite?",
  description:
    "Zatiaľ si sa nášho asistenta na nič nepýtal. Ak potrebuješ pomoc, neváhaj sa opýtať – náš asistent nehryzie!",
  subText: "Stačí začať nový chat!",
  buttonText: "Nový chat",
};

export default function LibraryEmptyState(): JSX.Element {
  return (
    <Card className="w-[754px] bg-components-cards-backgrounds-BG-color-1 border-components-cards-borders-BR-color-2 shadow-neutral-BS-regular">
      <CardContent className="flex flex-col items-center pt-8 pb-8">
        {/* Icon Container */}
        <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[rgba(141,193,255,0.6)] to-[rgba(141,193,255,0)] mb-6 flex items-center justify-center">
          <div className="relative w-[62px] h-11">
            <div className="absolute w-[62px] h-8 bg-components-sections-BG-color-1 rounded-[3px] border-[0.6px] border-globals-global-borders-border-4 shadow-neutral-BS-regular">
              <div className="w-full h-px bg-globals-global-borders-border-4 mt-2.5" />
              <div className="w-full h-2.5 bg-globals-global-borders-border-4/10" />
            </div>

            <div className="absolute w-6 h-6 top-[21px] left-[19px] rounded-full bg-primary shadow-[0px_3.51px_5.27px_#2375fd47] flex items-center justify-center">
              <Plus className="w-[9px] h-[9px] text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-4 max-w-[383px]">
          <h2 className="font-display-3-medium text-components-inputs-select-text-text-dark text-center">
            {chatData.title}
          </h2>

          <p className="text-components-inputs-select-text-text-neutral text-center">
            {chatData.description}
          </p>

          <p className="text-components-inputs-select-text-text-neutral text-center">
            {chatData.subText}
          </p>

          <Button
            variant="default"
            size="default"
            className="mt-2 bg-primary text-white hover:bg-primary/90"
          >
            {chatData.buttonText}
            <Plus className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
