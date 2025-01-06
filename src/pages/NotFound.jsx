import DynamicThemeBackground from "../components/DynamicThemeBackground/DynamicThemeBackground"
import { motion } from "framer-motion"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const lightBg = "/images/background/bg-404/DALL·E 2025-01-05 16.13.16-Light.webp"
  const darkBg = "/images/background/bg-404/DALL·E 2025-01-05 16.13.22-Dark.webp"

  const handleBackToHome = () => {
    navigate("/")
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <DynamicThemeBackground lightBg={lightBg} darkBg={darkBg} />
      <motion.h1
        className={clsx(
          "text-center text-6xl font-bold",
          "mb-4",
          "relative",
          "relief-text",
          "bg-gradient-to-r from-amber-500 via-red-500 to-amber-500",
          "bg-clip-text text-transparent",
          "leading-tight"
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t("common.notFoundPage.title")}
      </motion.h1>
      {/* <motion.p
        className={clsx(
          "text-center text-xl",
          "text-yellow-200",
          "mb-8",
          "max-w-2xl",
          "font-semibold"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {t("common.notFoundPage.description")}
      </motion.p> */}
      <motion.p
        className={clsx(
          "mb-4 text-center",
          "relative",
          "relief-text",
          "text-lg sm:text-xl",
          "max-w-2xl"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <span className={clsx("relative z-10", "text-amber-400")}>
          {t("common.notFoundPage.description")}
        </span>
        <span
          className={clsx(
            "absolute inset-0",
            "translate-x-[1px] translate-y-[1px]",
            "text-zinc-500"
          )}
          aria-hidden="true"
        >
          {t("common.notFoundPage.description")}
        </span>
      </motion.p>
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-amber-500" />
        <button
          className={clsx(
            "relative",
            "px-6 py-3",
            "bg-gradient-to-r from-amber-500 via-red-500 to-amber-500",
            "text-zinc-100",
            "rounded-lg",
            "shadow-lg",
            "hover:bg-amber-600",
            "focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50",
            "animate-pulse",
            "transition-all duration-300 ease-in-out",
            "cursor-pointer",
            "hover:scale-110"
          )}
          onClick={handleBackToHome}
        >
          {t("common.notFoundPage.button")}
        </button>
      </div>
    </div>
  )
}
