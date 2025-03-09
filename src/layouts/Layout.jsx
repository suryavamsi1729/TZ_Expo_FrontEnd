import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/sidebar/app-sidebar"
import DashbordBreadcumbs from "../components/breadcrumbs/dashbordbreadcumbs"
import { cn } from "../lib/utils"
import { Search } from "lucide-react"
import {FaMedal } from "react-icons/fa";


export default function Layout({ children }) {
  return (
    
      <SidebarProvider className={cn("w-screen h-full")}>
        <AppSidebar />
        <main className="flex flex-col grow h-screen overflow-hidden bg-[#FAFAFA]">
          <div className="w-full h-auto flex flex-row justify-start items-center p-3   border-zinc-200">
            <SidebarTrigger className={"bg-transparent border-none outline-none ring-0 hover:bg-zinc-300/40"}/>
            <div className="grow h-auto flex flex-col justify-center items-start px-4 ">
              <DashbordBreadcumbs/>
            </div>
            <div className="w-auto h-auto flex flex-row justify-end items-center gap-7">
              <div className="relative w-auto h-auto commonShadow rounded-[12px] flex flex-row justify-start items-center bg-[#FFFFFF] ">
                <Search className="absolute left-2 w-5! h-5! p-0 text-[#71717A]"/>
                <input className="w-[320px] h-[48px] rounded-[12px] ps-10 py-1 pe-2 text-base placeholder:text-zinc-800/60 placeholder:text-base text-zinc-900 focus:ring-0 focus:outline-2 focus:outline-zinc-800/80" placeholder="Search"/>
              </div>
              <div className={`w-auto h-full flex flex-row justify-center items-center p-2 gap-2 bg-gray-300 rounded-full`}>
                <FaMedal className={`w-6 h-6 text-gray-400`} />
              </div>
            </div>
          </div>
          <div className="w-full grow p-4">
            {children}
          </div>
        </main>
      </SidebarProvider>
    
  )
}
