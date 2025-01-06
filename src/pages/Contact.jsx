import { motion } from "framer-motion"
import clsx from "clsx"
import DynamicThemeBackground from "../components/DynamicThemeBackground/DynamicThemeBackground"
import ContactForm from "../components/ContactComponents/ContactForm"
import Dynamic3DSceneRenderer from "../components/Dynamic3DSceneRenderer/Dynamic3DSceneRenderer"
import Title from "../components/ContactComponents/Title"

export default function Contact() {
  const lightBg = "/images/background/bg-contact/DALL·E 2024-10-28 21.02.18-Contact-Light.webp"
  const darkBg = "/images/background/bg-contact/DALL·E 2024-10-18 23.31.19-Contact-Dark.webp"

  return (
    <div
      className={clsx(
        "relative",
        "mx-auto",
        "flex",
        "min-h-screen",
        "max-w-5xl",
        "flex-col",
        "items-center",
        "justify-center",
        "pb-4",
        "pl-4",
        "pr-4",
        "pt-16"
      )}
    >
      <DynamicThemeBackground lightBg={lightBg} darkBg={darkBg} />
      <section className="absolute -top-28 -z-10 h-full w-full">
        <Dynamic3DSceneRenderer
          ModelComponent="Stargate"
          modelProps={{ scale: 0.7 }}
          enableTracking={false}
          threshold={0.001}
        />
      </section>
      <motion.section>
        <Title />
        <ContactForm />
      </motion.section>
    </div>
  )
}
