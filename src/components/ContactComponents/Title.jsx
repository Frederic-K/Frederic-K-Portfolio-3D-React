import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
}

function Title() {
  const { t } = useTranslation()

  return (
    <motion.section
      className="flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className={clsx(
          "mb-4 text-center",
          "text-6xl font-bold sm:text-8xl",
          "relative",
          "relief-text"
        )}
        variants={itemVariants}
      >
        <span
          className={clsx(
            "relative z-10",
            "bg-gradient-to-r from-amber-500 via-red-500 to-amber-500",
            "bg-clip-text text-transparent"
          )}
        >
          {t("contactPage.title")}
        </span>
        <span
          className={clsx(
            "absolute inset-0",
            "translate-x-[1px] translate-y-[1px]",
            "text-zinc-500"
          )}
          aria-hidden="true"
        >
          {t("contactPage.title")}
        </span>
      </motion.h1>
      <motion.h2
        className={clsx(
          "mb-4 text-center",
          "relative",
          "relief-text",
          "text-xl sm:text-2xl",
          "max-w-2xl"
        )}
        variants={itemVariants}
      >
        <span className={clsx("relative z-10", "text-amber-400")}>{t("contactPage.subtitle")}</span>
        <span
          className={clsx(
            "absolute inset-0",
            "translate-x-[1px] translate-y-[1px]",
            "text-zinc-500"
          )}
          aria-hidden="true"
        >
          {t("contactPage.subtitle")}
        </span>
      </motion.h2>
      <motion.p
        className={clsx(
          "mb-4 text-center",
          "relative",
          "relief-text",
          "text-lg sm:text-xl",
          "max-w-2xl"
        )}
        variants={itemVariants}
      >
        <span className={clsx("relative z-10", "text-amber-400")}>
          {t("contactPage.catchphrase")}
        </span>
        <span
          className={clsx(
            "absolute inset-0",
            "translate-x-[1px] translate-y-[1px]",
            "text-zinc-500"
          )}
          aria-hidden="true"
        >
          {t("contactPage.catchphrase")}
        </span>
      </motion.p>
    </motion.section>
  )
}

export default Title
