import { I18nextProvider } from "react-i18next"
import { ThemeProvider } from "./ThemeProvider"
import i18n from "../i18n"

const Providers = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nextProvider>
  )
}

export default Providers
