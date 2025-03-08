import { Home,Bell ,Cctv ,MessageCircleWarning ,CodeXml, BrainCircuit} from "lucide-react"
import applogo from "../../assets/applogo.svg";
import { useSidebar } from "@/components/ui/sidebar";
import UserDropdownMenu from "./userdropdown";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarFooter, SidebarHeader } from "../ui/sidebar";
import { cn } from "../../lib/utils";
import useBreadcrumsStore from "../../store/breadcrumsStore";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Cemaras",
    url: "#",
    icon: Cctv,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
  {
    title: "Demo",
    url: "#",
    icon: CodeXml,
  },
  {
    title: "Reports",
    url: "#",
    icon: MessageCircleWarning,
  },
  {
    title: "Model Parameters",
    url: "#",
    icon: BrainCircuit,
  },
]

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  const addBreadcrum = useBreadcrumsStore((state)=>state.addBreadcrumb);
  return (

    <Sidebar collapsible="icon" >
        <SidebarHeader className={cn("w-full h-auto p-1 border-b border-zinc-200")}>
          <SidebarMenu>
            <SidebarMenuItem>
            <SidebarMenuButton asChild>
                    <a href="#" className={cn(`w-full h-auto flex items-center space-x-2 group-data-[collapsible=icon]:size-auto! group-data-[collapsible=icon]:p-0!  px-3 py-3 hover:bg-transparent `)}>
                      <img src={applogo} alt="logo" className="h-7 w-7" />
                      <span className="text-zinc-700 font-bold text-xl">SHWAS</span>
                    </a>
                  </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel className={cn("text-lg")}>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className={cn("space-y-2")}>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={()=>{addBreadcrum({name:item.title,parent:"none"})}} className={cn("px-4 py-2 ")} asChild>
                    <a className={cn(" text-base w-full h-auto group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:size-auto! group-data-[collapsible=icon]:p-0! p-3 hover:cursor-pointer")} >
                      <item.icon className={cn("text-zinc-600/80 group-hover/menu-item:text-zinc-700 stroke-2 text-xl")} />
                      <span className={cn("text-base  text-zinc-600/80 group-hover/menu-item:text-zinc-700")}>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={cn("w-full h-auto p-1 border-t border-zinc-200")}>
        
        <SidebarMenu>
          <SidebarMenuItem>
            <UserDropdownMenu/>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar;
