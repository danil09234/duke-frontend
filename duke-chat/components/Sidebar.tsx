import React from "react";
import { UserAvatar } from "./Avatar";
import { SidebarItem } from "./SidebarItem";
import { Button } from "../components/ui/button";
import { List, ListSubheader } from "../components/ui/list";
import {
  MoonIcon,
  PlusIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/react/24/outline";

export function Sidebar() {
  return (
    <div className="flex flex-col p-6 w-72 min-w-72 max-h-880 bg-gray-100">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserAvatar />
            <span className="font-medium text-gray-900">Vladyslav</span>
          </div>
          <div className="flex items-center gap-2">
            <MoonIcon className="w-4 h-4 text-gray-600" />
            <SearchIcon className="w-4 h-4 text-gray-600" />
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 border rounded bg-white shadow">
          <SearchIcon className="w-4 h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search chat..."
            className="flex-1 text-sm text-gray-600 placeholder-gray-400"
          />
        </div>
      </div>
      <List
        className="flex-1 mt-4"
        subheader={<ListSubheader>Chat History</ListSubheader>}
      >
        <SidebarItem
          icon={<MoonIcon className="w-4 h-4 text-gray-600" />}
          text="Chat 1"
        />
        <SidebarItem
          icon={<MoonIcon className="w-4 h-4 text-gray-600" />}
          text="Chat 2"
        />
        <SidebarItem
          icon={<MoonIcon className="w-4 h-4 text-gray-600" />}
          text="Chat 3"
        />
      </List>
      <Button className="mt-4 flex items-center gap-2 bg-orange-500 text-white">
        <PlusIcon className="w-4 h-4" />
        Start New Chat
      </Button>
    </div>
  );
}
