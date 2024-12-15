"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PlusCircle,
  Menu,
  Home,
  Book,
  Settings,
  MessageSquare,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const sections = [
  { name: "Chaty", href: "/chats", icon: MessageSquare },
  { name: "Knižnica", href: "/library", icon: Book },
  { name: "Nájsť program", href: "/chats/chat123", icon: Home },
];

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Открыть меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gray-50">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-primary">
            DUKE Assistant
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-6">
          <nav className="flex flex-col space-y-2">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  pathname === section.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                )}
                onClick={() => setOpen(false)}
              >
                <section.icon className="mr-3 h-5 w-5" />
                {section.name}
              </Link>
            ))}
          </nav>
          <Button
            onClick={() => setOpen(false)}
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Добавить чат
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
