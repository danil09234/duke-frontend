"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlusCircle } from "lucide-react";

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
  { name: "Chaty", href: "/chats" },
  { name: "Knižnica", href: "/library" },
  { name: "Nájsť program", href: "/chats/chat123" },
];

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full px-0">
        <SheetHeader>
          <SheetTitle>Navigacia</SheetTitle>
        </SheetHeader>
        <div className="flex justify-between items-center px-4 py-2">
          <nav className="flex space-x-2">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md",
                  pathname === section.href
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-600 hover:bg-gray-100"
                )}
                onClick={() => setOpen(false)}
              >
                {section.name}
              </Link>
            ))}
          </nav>
          <Button onClick={() => setOpen(false)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nový chat
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
