export interface Route {
  name: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  shortcut: string;
}

import { MessageCircle, Book, Puzzle } from "lucide-react";

export const routes: Route[] = [
  {
    name: "Chaty",
    path: "/",
    icon: MessageCircle,
    shortcut: "⌘ 1",
  },
  {
    name: "Knižnica",
    path: "/library",
    icon: Book,
    shortcut: "⌘ 2",
  },
  {
    name: "Nájsť program",
    path: "/find-program",
    icon: Puzzle,
    shortcut: "⌘ 3",
  },
];
