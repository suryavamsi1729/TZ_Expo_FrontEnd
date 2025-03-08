import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/sidebar/app-sidebar"
import DashbordBreadcumbs from "../components/breadcrumbs/dashbordbreadcumbs"
import { cn } from "../lib/utils"

export default function Layout({ children }) {
  return (
    
      <SidebarProvider className={cn("w-screen h-full")}>
        <AppSidebar />
        <main className="flex flex-col grow h-screen overflow-hidden">
          <div className="w-full h-auto flex flex-row justify-start items-center p-4  border-zinc-200">
            <SidebarTrigger className={"bg-transparent border-none outline-none ring-0 hover:bg-zinc-300/40"}/>
            <div className="grow h-auto flex flex-col justify-center items-start px-4 ">
              <DashbordBreadcumbs/>
            </div>
          </div>
          {children}
        </main>
      </SidebarProvider>
    
  )
}
