import { Button } from "@/components/ui/button"
import kesava from "../../assets/kesava.jpeg";
import { cn } from "../../lib/utils";
import { ChevronsUpDown ,Sparkles, Settings, ReceiptIndianRupee, User, LogOut} from "lucide-react"
import {
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function UserDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <SidebarMenuButton asChild>
              <a href="#" className={cn("w-full h-auto py-2 px-2 flex justify-start items-center space-x-1 group-data-[collapsible=icon]:size-auto! group-data-[collapsible=icon]:p-0!")}>
                <img src={kesava} alt="logo" className="h-8 w-8 rounded-lg" />
                <div className="grow flex flex-col justify-center items-start">
                  <div className="grow text-zinc-700 font-bold text-sm">Kesava</div>
                  <div className="grow text-zinc-700 font-medium text-sm/[14px] ">Kesava@gmail.com</div>
                </div>
                <ChevronsUpDown className={cn("text-zinc-700")} />
              </a>
            </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="end" className="w-56">
        <DropdownMenuLabel>
            <div className={cn("w-full h-auto flex justify-start items-center space-x-2")}>
                <img src={kesava} alt="logo" className="h-9 w-9 rounded-lg" />
                <div className="grow flex flex-col justify-center items-start gap-1">
                  <div className="grow text-zinc-700 font-bold text-sm/[14px]">Kesava</div>
                  <div className="grow text-zinc-700 font-medium text-sm/[14px] ">Kesava@gmail.com</div>
                </div>
              </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <div className="w-full h-auto flex justify-start space-x-2">
                <Sparkles className={cn("text-zinc-700 w-[18px]!")} />
                <div className="grow text-zinc-700 font-medium text-sm">Upgrade plan
                </div>
            </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <div className="w-full h-auto flex justify-start space-x-2">
                        <User className={cn("text-zinc-700 w-[18px]!")} />
                        <div className="grow text-zinc-700 font-medium text-sm">Profile
                        </div>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="w-full h-auto flex justify-start space-x-2">
                        <ReceiptIndianRupee className={cn("text-zinc-700 w-[18px]!")} />
                        <div className="grow text-zinc-700 font-medium text-sm">Billing
                        </div>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="w-full h-auto flex justify-start space-x-2">
                        <Settings className={cn("text-zinc-700 w-[18px]!")} />
                        <div className="grow text-zinc-700 font-medium text-sm">Settings
                        </div>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="w-full h-auto flex justify-start space-x-2">
            <LogOut className={cn("text-zinc-700 w-[18px]!")} />
            <div className="grow text-zinc-700 font-medium text-sm">Log out
            </div>
        </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
