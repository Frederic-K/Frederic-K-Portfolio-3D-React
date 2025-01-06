import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useThemeStore = create(
  persist(
    (set) => ({
      isDarkTheme: true, // Default to dark theme, set to false for light theme
      toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
    }),
    { name: "theme-storage" }
  )
)
