import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/sidebar/app-sidebar"
import { cn } from "../lib/utils"

export default function Layout({ children }) {
  return (
    
      <SidebarProvider className={cn("w-screen h-full")}>
        <AppSidebar />
        <main className="flex flex-col grow h-screen overflow-hidden px-3 py-3">
          <div className="w-full h-auto flex flex-col justify-start items-start">
            <SidebarTrigger className={"bg-transparent border-none outline-none ring-0 hover:bg-zinc-300/40"}/>
          </div>
          {children}
        </main>
      </SidebarProvider>
    
  )
}
