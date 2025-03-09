import { Link } from "react-router-dom";
import { useState } from "react";
import useBreadcrumsStore from "../../store/breadcrumsStore";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function DashbordBreadcumbs() {
  const breadcrums = useBreadcrumsStore((state)=>state.breadcrumbs);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {
          breadcrums.map((item,index)=>{
            if(index!==breadcrums.length-1){
              return(
                <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink className={"text-lg font-medium text-zinc-700/60"}>
                    <Link to="/">{item.name}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                </>
              )
            }
            else{
              return(
                <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className={"text-lg font-semibold text-zinc-700"}>
                    {item.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
                
                </>
              )
            }
          })
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}
