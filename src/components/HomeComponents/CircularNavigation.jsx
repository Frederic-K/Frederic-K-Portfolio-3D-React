import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { NAVBUTTON_LINKS } from "@/lib/constants"
import NavButton from "./NavButton"
import clsx from "clsx"

const CircularNavigation = () => {
  const [radius, setRadius] = useState(200)

  useEffect(() => {
    const handleResize = () => {
      const newRadius = Math.min(window.innerWidth, window.innerHeight) * 0.3
      setRadius(newRadius)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const calculatePosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2 // Start from top
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    return { x, y, angle: (angle * 180) / Math.PI } // Convert angle to degrees
  }

  return (
    <motion.div
      className={clsx(
        "pointer-events-none",
        "fixed inset-0",
        "hidden items-center justify-center",
        "sm:flex",
        "hover:pause group animate-spin-slow"
      )}
    >
      {NAVBUTTON_LINKS.map((btn, index) => {
        const { x, y } = calculatePosition(index, NAVBUTTON_LINKS.length)
        return (
          <motion.div
            key={btn.id}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, x, y }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div className={clsx("pointer-events-auto", "group-hover:pause")}>
              <NavButton {...btn} />
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default CircularNavigation
