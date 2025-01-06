import { motion, useScroll, useSpring } from "framer-motion"
import { CAREER, SKILLS } from "../../lib/constants"
import JobItemMotionLayout from "../Layouts/JobItemMotionLayout"
import JobCard from "./JobCard"
import clsx from "clsx"

const Timeline = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative px-4 lg:px-0">
      {/* Timeline */}
      <motion.div
        className={clsx(
          "absolute top-0 h-full",
          "w-3 rounded-full",
          "bg-gradient-to-b from-yellow-300 via-amber-400 to-orange-500",
          "left-1 lg:left-[calc(50%-6px)]" // Adjust the left position to center the timeline, compensate the timeline width
        )}
        style={{ scaleY, originY: 0 }}
      />
      {/* List of jobs */}
      <ul className="ml-8 space-y-12 py-20 lg:ml-0">
        {CAREER.map((job, index) => (
          <li key={job.id} className="relative">
            {/* Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
              {/* Distribution */}
              {index % 2 === 0 ? (
                <>
                  <JobItemMotionLayout index={index}>
                    <JobCard job={job} skills={SKILLS} />
                  </JobItemMotionLayout>
                  <div className="hidden lg:block" />
                </>
              ) : (
                <>
                  <div className="hidden lg:block" />
                  <JobItemMotionLayout index={index}>
                    <JobCard job={job} skills={SKILLS} />
                  </JobItemMotionLayout>
                </>
              )}
            </div>
            {/* Milestone indicator */}
            <div
              className={clsx(
                "absolute z-10",
                "top-1/2 -translate-y-1/2",
                "-left-[55px] lg:left-1/2 lg:-translate-x-1/2",
                "h-[32px] w-[32px]"
              )}
            >
              <img
                src="/images/career/badge-1.png"
                alt="Milestone"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Timeline
