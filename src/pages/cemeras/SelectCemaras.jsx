import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
function SelectCemaras({setTypeCemaras}) {
  return (
    <Select defaultValue={null} onValueChange={(val)=>{setTypeCemaras(val)}}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Types of Cemaras" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem defaultValue value={null}>All</SelectItem>
          <SelectItem value={true}>Active</SelectItem>
          <SelectItem value={false}>Deactive</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default SelectCemaras;
