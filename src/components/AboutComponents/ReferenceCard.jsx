import clsx from "clsx"
import { useTranslation } from "react-i18next"

const ReferenceCard = ({ referenceKey, className }) => {
  const { t } = useTranslation()

  return (
    <div className={clsx("relative flex flex-col p-4", className)}>
      <div className="mb-2 flex justify-between">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          {t(`aboutPage.references.${referenceKey}.author`)}
        </h3>
        <span className="flex items-center text-sm text-zinc-500 dark:text-zinc-400">
          {t(`aboutPage.references.${referenceKey}.date`)}
          <img
            src="/images/profile/medaille.png"
            alt="Medaille"
            className="ml-1 h-7 w-7"
            loading="lazy"
          />
        </span>
      </div>
      <p className="text-zinc-700 dark:text-zinc-300">
        {t(`aboutPage.references.${referenceKey}.text`)}
      </p>
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
    </div>
  )
}

export default ReferenceCard
