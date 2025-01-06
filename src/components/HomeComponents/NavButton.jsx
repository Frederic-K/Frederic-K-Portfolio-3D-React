import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import clsx from "clsx"
import { useTranslation } from "react-i18next"

const NavBtnLink = motion.create(Link)

const NavButton = ({ labelKey, link, icon: Icon, newTab, labelDirection }) => {
  const { lang } = useParams()
  const { t } = useTranslation()

  const getLanguagePrefixedPath = (path) => {
    if (newTab) return path // For external links, use the original path
    return `/${lang}${path}`
  }

  const finalLink = getLanguagePrefixedPath(link)

  return (
    <nav className={clsx("z-50 cursor-pointer", "relative")}>
      <NavBtnLink
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        to={finalLink}
        target={newTab ? "_blank" : "_self"}
        className={clsx(
          "flex h-12 w-12 items-center justify-center rounded-full sm:size-14",
          "bg-orange-200",
          "dark:bg-orange-300",
          "shadow-convex-light dark:shadow-convex-dark",
          "hover:shadow-pressed-light dark:hover:shadow-pressed-dark",
          "transition-all duration-300 ease-in-out"
        )}
        rel={newTab ? "noopener noreferrer" : undefined}
        aria-label={t(labelKey)}
      >
        <span
          className={clsx(
            "sm:group-hover:pause",
            "relative",
            "flex",
            "items-center",
            "justify-center",
            "h-12 w-12 sm:h-12 sm:w-12",
            "p-2 sm:p-3",
            "text-gray-800",
            "hover:text-orange-700",
            "sm:animate-spin-slow-reverse"
          )}
        >
          <Icon className={clsx("h-full w-full")} strokeWidth={1.5} />
          <span className="peer absolute left-0 top-0 h-full w-full bg-transparent" />
          <span
            className={clsx(
              "absolute hidden whitespace-nowrap rounded-md px-2 py-1 text-sm peer-hover:block",
              labelDirection === "left" ? "right-full mr-4" : "left-full ml-4",
              "bg-gray-200 dark:bg-gray-700",
              "text-gray-800 dark:text-gray-200",
              "shadow-md",
              "transition-all duration-200 ease-in-out"
            )}
          >
            {t(labelKey)}
          </span>
        </span>
      </NavBtnLink>
    </nav>
  )
}

export default NavButton
