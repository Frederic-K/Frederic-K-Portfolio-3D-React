import { useTranslation } from "react-i18next"
import { PROGRAMS } from "../../lib/constants"
import clsx from "clsx"

function ProgramsList({ className }) {
  const { t } = useTranslation()

  return (
    <article className={clsx("relative flex flex-col justify-between", className)}>
      {PROGRAMS.map((program) => (
        <div key={program.id} className="p-3">
          <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
            {t(program.programTitleKey)}
          </h3>
          <div className="flex items-center justify-between font-bold">
            <div className="w-full text-sm text-zinc-700 dark:text-zinc-300">
              {t(program.programFromKey)}
            </div>
            <div className="relative flex w-24 items-center justify-end pr-1">
              <div className="text-sm text-zinc-700 dark:text-zinc-100">{program.programDate}</div>
              <img
                src="/images/skills/certification.png"
                alt="Medaille"
                className="absolute -right-1 -top-6 -z-10 h-12 w-12"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
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
    </article>
  )
}

export default ProgramsList
