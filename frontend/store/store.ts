import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import createThemeSlice from "./slices/themeSlice";

const createRootSlice = (set : any, get : any) => ({
  ...createThemeSlice(set, get),
});

export const useStore = create(
  persist(createRootSlice, {
    name: "storage",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({
      theme: state.theme,
    }),
  })
);
