import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BanknoteIcon,
  FileText,
  MessageCircle,
  PenLine,
  Plane,
  Plus,
  Star,
} from "lucide-react";
import React from "react";
import ChatLibraryPNG from "@/public/resources/chat-illustration.svg";

const cardData = {
  title: "Čo chcete vedieť o univerzite?",
  description:
    "Zatiaľ si sa nášho asistenta na nič nepýtal. Ak potrebuješ pomoc, neváhaj sa opýtať – náš asistent nehryzie!",
  subdescription: "Stačí začať nový chat!",
  buttonText: "Nový chat",
};

const cardsData = [
  {
    icon: <MessageCircle className="w-4 h-4 text-orange-500" />,
    text: "Ktorý študijný program na vybrať pre dceru?",
  },
  {
    icon: <Star className="w-4 h-4 text-orange-500" />,
    text: "Kedy je termín na podanie prihlášky na FEI KPI?",
  },
  {
    icon: <Plane className="w-4 h-4 text-orange-500" />,
    text: "Aké študijné programy ponúka Letecka fakulta?",
  },
  {
    icon: <BanknoteIcon className="w-4 h-4 text-orange-500" />,
    text: "Aké sú poplatky spojené so štúdiom alebo podaním prihlášky?",
  },
  {
    icon: <FileText className="w-4 h-4 text-orange-500" />,
    text: "Ako sa dá podať prihláška online pomocou MAIS?",
  },
  {
    icon: <PenLine className="w-4 h-4 text-orange-500" />,
    text: "Kde môžem nájsť informácie o prijímacích skúškach?",
  },
];

export default function LibraryEmptyState(): JSX.Element {
  return (
    <Card className="w-full max-w-3xl px-8 py-6 border-components-cards-borders-BR-color-2 z-10">
      <CardContent className="flex flex-col items-center gap-8 p-0">
        <ChatLibraryPNG />
        <div className="flex flex-col items-center gap-2 text-center max-w-[384]">
          <h2 className="font-display-3-medium text-components-inputs-select-text-text-dark text-base font-medium">
            {cardData.title}
          </h2>
          <p className="w-full max-w-md font-paragraph-default-regular text-sm text-[#666F8D]">
            {cardData.description}
          </p>
          <p className="w-full max-w-md font-paragraph-default-regular text-sm text-[#666F8D] mt-2">
            {cardData.subdescription}
          </p>
        </div>
        <Button className="inline-flex items-center gap-1 bg-[#FF4100] hover:bg-[#FF4100]/90 text-white border-none font-display-1-medium text-xs font-medium rounded-[8]">
          <span>Nový chat</span>
          <Plus className="h-2.5 w-2.5" />
        </Button>
      </CardContent>
    </Card>
  );
}
