import { lazy } from "react"
import clsx from "clsx"
import Title from "./Title"

const Dynamic3DSceneRenderer = lazy(
  () => import("../Dynamic3DSceneRenderer/Dynamic3DSceneRenderer")
)

function LandingSection() {
  return (
    <section
      className={clsx("relative", "flex", "h-screen", "flex-col", "items-center", "justify-center")}
    >
      <div className="absolute inset-0 -z-10 md:hidden">
        <Dynamic3DSceneRenderer
          ModelComponent="HoverBike"
          modelProps={{
            animationSpeed: 0.3,
            scale: 0.55,
          }}
          enableTracking={false}
          threshold={0.001}
          lights={[
            { type: "ambientLight", intensity: 0.3, color: "#3D2B1F" },
            {
              type: "pointLight",
              position: [10, 10, 10],
              intensity: 0.6,
              color: "#8B4513",
            },
            {
              type: "directionalLight",
              position: [-5, 5, 5],
              intensity: 0.4,
              color: "#B8860B",
            },
          ]}
        />
      </div>
      <div className="absolute inset-0 top-[10%] -z-10 hidden md:flex">
        <Dynamic3DSceneRenderer
          ModelComponent="HoverBike"
          modelProps={{
            animationSpeed: 0.3,
            scale: 0.7,
          }}
          enableTracking={false}
          threshold={0.001}
          lights={[
            { type: "ambientLight", intensity: 0.3, color: "#3D2B1F" },
            {
              type: "pointLight",
              position: [10, 10, 10],
              intensity: 0.6,
              color: "#8B4513",
            },
            {
              type: "directionalLight",
              position: [-5, 5, 5],
              intensity: 0.4,
              color: "#B8860B",
            },
          ]}
        />
      </div>
      <div className="mb-[20%] mt-auto md:mb-[15%] lg:mb-[10%]">
        <Title />
      </div>
    </section>
  )
}

export default LandingSection
