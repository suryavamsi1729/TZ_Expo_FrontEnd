import { Home,Bell ,Cctv ,MessageCircleWarning ,CodeXml, BrainCircuit, Webcam, RadioTower} from "lucide-react"
import applogo from "../../assets/applogo.svg";
import UserDropdownMenu from "./userdropdown";
import { useLocation, useNavigate } from "react-router-dom";
import { navgationCheck } from "../../lib/utils";
import { useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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
    link:"/home"
  },
  {
    title: "Camera",
    url: "#",
    icon: Cctv,
    link:"/camera"
  },
  {
    title: "Demo",
    url: "#",
    icon: CodeXml,  
    link:"/demo"
  },
  {
    title: "WebCam",
    url: "#",
    icon: Webcam,
    link:"/webcam"
  },
  {
    title: "Live",
    url: "#",
    icon: RadioTower,
    link:"/live"
  },
  {
    title: "Model Parameters",
    url: "#",
    icon: BrainCircuit,
    link:"/modelparameters"
  },
  {
    title: "Reports",
    url: "#",
    icon: MessageCircleWarning,
    link:"/reports"
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
    link:"/notifications"
  },
]

export function AppSidebar() {
  

  const location = useLocation();
  const navigate = useNavigate();
  const addBreadcrum = useBreadcrumsStore((state)=>state.addBreadcrumb);
  useEffect(() => {
    const current_item = items.filter((item)=>item.link===location.pathname);
    
    addBreadcrum({name:current_item[0]?.title ,parent:"none"});
  }, []);

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
                  {/* onClick={()=>{addBreadcrum({name:item.title,parent:"none"})}} */}
                  <SidebarMenuButton onClick={()=>{navigate(item.link)}}  className={cn(`px-4 py-2 ${navgationCheck(location.pathname,item.link)?"bg-zinc-300":null} hover:bg-zinc-200`)} asChild>
                    <a className={cn(" text-base w-full h-auto group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:size-auto! group-data-[collapsible=icon]:p-0! p-3 hover:cursor-pointer ")} >
                      <item.icon className={cn(`text-zinc-600/80 group-hover/menu-item:text-zinc-700 stroke-2 text-xl ${navgationCheck(location.pathname,item.link)?"text-zinc-900":null}`)} />
                      <span className={cn(`text-base  text-zinc-600/80 group-hover/menu-item:text-zinc-700 ${navgationCheck(location.pathname,item.link)?"text-zinc-900":null}`)}>{item.title}</span>
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
