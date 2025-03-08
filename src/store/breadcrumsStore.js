import { create } from "zustand";

const useBreadcrumbsStore = create((set, get) => ({
    breadcrumbs: [],

    addBreadcrumb: (breadcrumb) => {
        set((state) => {
            const bread = [...state.breadcrumbs];
            const parentIndex = bread.findIndex(item => item === breadcrumb.parent);

            // if (parentIndex !== -1) {
            //     // Remove breadcrumbs after the parent and add the new one
            //     bread.splice(parentIndex + 1);
            //     bread.push(breadcrumb);
            // } else {
            //     // If no parent is found, add a fresh breadcrumb
            //     bread.splice(parentIndex + 1);
            //     bread.push(breadcrumb);
            // }
            bread.splice(parentIndex + 1);
            bread.push(breadcrumb);
            return { breadcrumbs: bread };
        });
    },

    removeBreadcrumb: (id) => {
        set((state) => ({
            breadcrumbs: state.breadcrumbs.slice(0, id), // Remove items after the given id
        }));
    },

    reset: () => set({ breadcrumbs: [] }),
}));

export default useBreadcrumbsStore;
