// TODO : add a background image but not with lang as key, but URL

import { Outlet, useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { BACKGROUND_IMAGES } from "../../lib/constants"
import ImagePreloader from "../ImagePreloader/ImagePreloader"
import Header from "../Header/Header"
import FireFlies from "../FireFlies/FireFlies"
import TopButton from "../TopButton/TopButton"
import ToastContainer from "../Toast/ToastContainer"
import { useTranslation } from "react-i18next"

// const pageVariants = {
//   initial: { opacity: 0 },
//   in: { opacity: 1 },
//   out: { opacity: 0 },
// }

// const pageTransition = {
//   type: "tween",
//   ease: "anticipate",
//   duration: 0.6,
// }

const RootLayout = () => {
  const { lang } = useParams()
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  useEffect(() => {
    const supportedLangs = ["en", "fr"] // Add more languages as needed
    if (!supportedLangs.includes(lang)) {
      navigate("/en", { replace: true })
    } else {
      i18n.changeLanguage(lang)
    }
  }, [lang, navigate, i18n])

  return (
    <div className="relative min-h-screen font-exo2 antialiased">
      <ImagePreloader imageSources={BACKGROUND_IMAGES} />
      <FireFlies />
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
          // key={lang}
          // initial="initial"
          // animate="in"
          // exit="out"
          // variants={pageVariants}
          // transition={pageTransition}
          // className="absolute inset-0 z-0"
          >
            {/* <div className="absolute inset-0 bg-zinc-800">
              <img
                src="/images/project/backgroundCube.webp"
                alt=""
                className="h-full w-full object-cover object-center opacity-30"
              />
            </div> */}
            {/* <div className="relative z-10"> */}
            <Outlet />
            {/* </div> */}
          </motion.div>
        </AnimatePresence>
      </main>
      <TopButton />
      <ToastContainer />
    </div>
  )
}

export default RootLayout
