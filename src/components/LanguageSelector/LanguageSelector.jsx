import React, { useState, useRef, useCallback } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"
import clsx from "clsx"
import { FLAGS, LANGUAGES } from "../../lib/constants"

const LanguageSelector = React.memo(function LanguageSelector() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const dropdownRef = useRef(null)

  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  const handleLocaleChange = useCallback(
    (newLocale) => {
      setIsChangingLanguage(true)
      i18n
        .changeLanguage(newLocale)
        .then(() => {
          const currentPath = location.pathname
          const newPath = `/${newLocale}${currentPath.substring(3) || "/"}`
          navigate(newPath)
        })
        .catch((error) => {
          console.error("Failed to change language:", error)
          // TODO: Add error handling for failed language change
        })
        .finally(() => {
          setIsChangingLanguage(false)
          setIsOpen(false)
        })
    },
    [i18n, navigate, location]
  )

  const handleKeyDown = (event, lang) => {
    if (event.key === "Enter" || event.key === " ") {
      handleLocaleChange(lang.code)
    }
  }

  const currentLocale = i18n.language

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex h-9 w-9 items-center justify-center rounded-full",
          "bg-orange-200",
          "dark:bg-zinc-600",
          "shadow-convex-light dark:shadow-convex-dark",
          "hover:shadow-pressed-light dark:hover:shadow-pressed-dark",
          "transition-all duration-300 ease-in-out",
          isChangingLanguage && "cursor-not-allowed opacity-50"
        )}
        whileTap={{ scale: 0.9 }}
        aria-label="Select language"
        aria-haspopup="true"
        aria-expanded={isOpen}
        disabled={isChangingLanguage}
      >
        <motion.div
          className="flex h-full w-full items-center justify-center"
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={FLAGS[currentLocale]}
            alt={`${LANGUAGES.find((lang) => lang.code === currentLocale)?.name} Flag`}
            width={20}
            height={20}
          />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-7 mt-3 w-36 rounded-md border border-zinc-200 bg-zinc-100/50 text-zinc-600 shadow-lg dark:border-zinc-600 dark:bg-zinc-700/50 dark:text-zinc-300"
          >
            {LANGUAGES.map((lang, index) => (
              <div
                key={lang.code}
                role="menuitem"
                tabIndex={0}
                className="cursor-pointer"
                onClick={() => handleLocaleChange(lang.code)}
                onKeyDown={(e) => handleKeyDown(e, lang)}
              >
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-left transition-colors duration-200 ease-in-out hover:bg-orange-200/50 hover:text-zinc-800 dark:hover:bg-orange-700/30 dark:hover:text-zinc-100 ${
                    currentLocale === lang.code ? "bg-orange-200/30 dark:bg-orange-700/20" : ""
                  }`}
                >
                  <motion.span className="flex-shrink-0">
                    <img src={FLAGS[lang.code]} alt={`${lang.name} Flag`} width={20} height={20} />
                  </motion.span>
                  <span>{lang.name}</span>
                </motion.div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

export default LanguageSelector
