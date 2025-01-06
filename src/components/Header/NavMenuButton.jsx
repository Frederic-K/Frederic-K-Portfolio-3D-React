import clsx from "clsx"

const NavMenuButton = ({ onClick, isDarkTheme, isOpen }) => (
  <button
    onClick={onClick}
    className={clsx(
      "flex h-9 w-9 items-center justify-center rounded-full",
      "bg-orange-200",
      "dark:bg-zinc-600",
      "shadow-convex-light dark:shadow-convex-dark",
      "hover:shadow-pressed-light dark:hover:shadow-pressed-dark",
      "transition-all duration-300 ease-in-out",
      "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
    )}
    aria-label="Toggle navigation menu"
  >
    <div className="relative h-full w-full">
      <img
        src={
          isDarkTheme
            ? "/images/navigation/boussole-rose-des-vents-white.png"
            : "/images/navigation/boussole-rose-des-vents-black.png"
        }
        alt="Navigation menu icon"
        className={clsx("hover:pause h-full w-full object-cover", {
          "animate-spin-btn-slow": !isOpen,
        })}
      />
    </div>
  </button>
)

export default NavMenuButton
