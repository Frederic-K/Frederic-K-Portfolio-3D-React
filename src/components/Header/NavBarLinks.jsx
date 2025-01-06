import { Link, useLocation, useParams } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"

const containerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const NavBarLinks = ({ isOpen, links }) => {
  const location = useLocation()
  const { t } = useTranslation()
  const { lang } = useParams()

  const linkClass = (path) => {
    const currentPath = location.pathname.replace(/^\/[^/]+/, "") || "/"
    const isActive = currentPath === path
    return `px-4 py-2 text-lg font-bold ${
      isActive
        ? "bg-gradient-to-r from-orange-700 via-orange-400 to-orange-700 bg-clip-text text-transparent"
        : "text-zinc-200 hover:bg-gradient-to-r hover:from-orange-700 hover:via-orange-400 hover:to-orange-700 hover:bg-clip-text hover:text-transparent"
    }`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.ul
            className="flex space-x-4"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {links.map((link) => (
              <motion.li
                key={link.path}
                variants={linkVariants}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={`/${lang}${link.path}`} className={linkClass(link.path)}>
                  {t(link.labelKey)}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default NavBarLinks
