import clsx from "clsx"
import { useTranslation } from "react-i18next"

function Summary({ className }) {
  const { t } = useTranslation()

  return (
    <div className={clsx("relative flex items-center", className)}>
      <img
        src="/images/project/backgroundCube.webp"
        alt="backgroundCube"
        className={clsx(
          "pointer-events-none",
          "absolute",
          "inset-0",
          "h-full",
          "w-full",
          "object-cover",
          "opacity-15"
        )}
      />
      <div>
        <h1 className={clsx("text-2xl font-bold text-zinc-800 dark:text-zinc-100")}>
          {t("aboutPage.summaryTitle")}
        </h1>
        <p className={clsx("mt-4 text-justify text-zinc-700 dark:text-zinc-300")}>
          {t("aboutPage.summaryText")}
        </p>
      </div>
    </div>
  )
}

export default Summary
