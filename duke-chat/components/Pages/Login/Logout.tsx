"use client";
import { signOut } from "@/actions/auth";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TooltipIconButton } from "@/components/ui/assistant-ui/tooltip-icon-button";
import { LogOut } from "lucide-react";

const Logout = ({ isSidebarExpanded }: { isSidebarExpanded: boolean }) => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await signOut();
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogout} className="w-full">
      {isSidebarExpanded ? (
        <Button
          className="w-full bg-[#FFF] border border-[#F0F2F5] hover:bg-[#FFF]/90 text-[#19213D] shadow-none"
          size="lg"
          type="submit"
          disabled={loading}
        >
          <LogOut className="h-4 w-4" /> 
          {loading ? "Odhlásenie..." : "Odhlásiť sa"}
        </Button>
      ) : (
        <TooltipIconButton
          tooltip="Odhlásiť sa"
          side="right"
          className="bg-[#FFF] w-8 h-8 rounded-[8px] border border-[#F0F2F5] hover:bg-[#FFF]/90"
          type="submit"
          disabled={loading}
        >
          <LogOut className="h-4 w-4" /> 
          {/* {loading ? "..." : "S"} */}
        </TooltipIconButton>
      )}
    </form>
  );
};

export default Logout;


