import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function navgationCheck(path,itemPath){
  const pathElement = path.split("/")[1].toLowerCase();
  if(pathElement === itemPath.slice(1,).toLowerCase()){
    return true;
  }
  return false;
}

export function navgationCheckSubRoute(path,itemPath){
const pathElement = path.replace(/^\/+|\/+$/g, "");
const itemPathElement = itemPath.replace(/^\/+|\/+$/g, "");
console.log(pathElement,itemPathElement);
if(pathElement === itemPathElement){
  return true;
}
return false;
}