import {ReactNode} from "react";
import {SidebarProvider} from "@/components/ui/sidebar";
import DesktopSidebar from "@/components/Sidebar/DesktopSidebar";
import {MobileSidebar} from "@/components/Sidebar/MobileSidebar";
import ClientRouter from "@/components/ClientRouter";

export function Sidebar({children}: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <ClientRouter>
                <div className="flex flex-col md:flex-row h-full min-h-screen w-full">
                    <DesktopSidebar />
                    <div className="fles flex-col flex-1">
                        <header className="md:hidden h-[73px] flex-shrink-0">
                            <MobileSidebar />
                        </header>
                        <main className="overflow-auto scrollbar-hide h-[calc(100vh-73px)] md:h-[100vh]">
                            {children}
                        </main>
                    </div>
                </div>
            </ClientRouter>
        </SidebarProvider>
    );
}

export default Sidebar;
