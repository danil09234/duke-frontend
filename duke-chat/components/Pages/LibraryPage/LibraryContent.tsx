import React from "react";
import {
  SearchIcon,
  ListFilter,
  ChevronDown,
  MessagesSquare,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LibraryGrid from "@/components/Pages/LibraryPage/LibraryGrid";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LibraryContent = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center px-4 py-10 sm:px-6 md:px-8 lg:px-[100] overflow-y-auto scrollbar-hide">
      <div className="flex flex-col gap-10 max-w-4xl w-full">
        <Tabs defaultValue="account" className="w-[400px] ">
          <TabsList className="grid h-10 w-full grid-cols-2 bg-[#F0F2F5]">
            <TabsTrigger
              value="account"
              className="h-full  data-[state=active]:text-[#19213D] data-[state=inactive]:text-[#666F8D]"
            >
              <MessagesSquare className="w-4 h-4 mr-2" />
              Všetky chaty
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="h-full data-[state=active]:text-[#19213D] data-[state=inactive]:text-[#666F8D]"
            >
              <Heart className="w-4 h-4 mr-2" />
              Obľúbené
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="h-full flex flex-col gap-8 w-full overflow-y-hidden overflow-x-visible">
          <div className="flex flex-col items-left sm:flex-row sm:items-center justify-between w-full overflow-x-visible">
            <p className="text-base text-[#666F8D] h-fit mb-4 sm:mb-0 flex items-left">
              Chaty (56)
            </p>
            <div
              className="flex sm:flex-row items-center gap-2
             w-full sm:w-auto overflow-visible sm:flex-nowrap"
            >
              <div className="flex items-center rounded-md shadow-sm border border-gray-200 bg-white w-full sm:w-auto h-10 px-3 py-1.5">
                <SearchIcon className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  className="flex-grow placeholder-gray-500 bg-transparent focus:outline-none"
                  placeholder="Hľadáj chat..."
                />
              </div>

              <Button className="bg-white hover:bg-[#FFFFFF]/90 text-[#666F8D] border-[#F0F2F5] px-3 py-1.5 flex items-center">
                <ListFilter />
                <span className="hidden xs:inline">Zoradiť podľa</span>
                <ChevronDown className="hidden xs:inline" />
              </Button>
            </div>
          </div>
          <LibraryGrid />
        </div>
      </div>
    </div>
  );
};

export default LibraryContent;
