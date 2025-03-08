import { create } from "zustand";
const useBreadcrumsStore = create((set,get) => ({
    breadcrums: [],
    length:0, 
    newBreadcrum: (breadcrum) => {
        set((state) => {
            const bread = [...state.breadcrums];
            state.breadcrums.map((Item,index)=>{
                
            })

        })
    },
}));
export default useBreadcrumsStore;