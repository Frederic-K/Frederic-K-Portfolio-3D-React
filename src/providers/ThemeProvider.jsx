import { useThemeStore } from "../lib/store/themeStore"

export function ThemeProvider({ children }) {
  const isDarkTheme = useThemeStore((state) => state.isDarkTheme)
  // console.log("theme", isDarkTheme)
  return <div className={isDarkTheme ? "dark" : ""}>{children}</div>
}

export default ThemeProvider
