import { motion } from "framer-motion"
import clsx from "clsx"
import JobCardContent from "./JobCardContent"

const JobCardSmall = ({ job, skills, index }) => {
  const motionProps = {
    initial: {
      opacity: 0,
      rotateY: 120,
      transformOrigin: "left center",
      z: -100,
    },
    whileInView: {
      opacity: 1,
      rotateY: 0,
      z: 0,
    },
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.5,
      delay: index * 0.2,
    },
    viewport: { once: true, margin: "-50px" },
  }

  return (
    <div className="persepective-1000">
      <motion.div
        {...motionProps}
        className={clsx(
          "p-4",
          "bg-zinc-300/30 dark:bg-zinc-800/30", // Add background color
          "rounded-lg shadow-md", // Add rounded corners and shadow
          "border border-zinc-200 dark:border-zinc-700", // Add border
          // "transition-all duration-300 ease-in-out", // Add transition effects
          "backdrop-blur-sm",
          "preserve-3d" // Preserve 3D space
        )}
      >
        <JobCardContent job={job} skills={skills} />
      </motion.div>
    </div>
  )
}

export default JobCardSmall
