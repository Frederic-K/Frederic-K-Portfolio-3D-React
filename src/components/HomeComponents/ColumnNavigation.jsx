import { motion } from "framer-motion"
import NavButton from "./NavButton"
import { NAVBUTTON_LINKS } from "@/lib/constants"
import clsx from "clsx"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
}

const ColumnNavigation = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid w-full grid-cols-2 gap-4 px-2.5 py-8 sm:hidden"
    >
      {NAVBUTTON_LINKS.map((btn, index) => (
        <motion.div
          key={btn.id}
          className={clsx("flex", index % 2 === 0 ? "justify-start" : "justify-end")}
          variants={buttonVariants}
        >
          {/* <NavButton {...btn } /> */}
          <NavButton labelDirection={index % 2 === 0 ? "right" : "left"} {...btn} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ColumnNavigation
