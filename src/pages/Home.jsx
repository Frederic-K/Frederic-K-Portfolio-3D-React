import { lazy, Suspense } from "react"
import DynamicThemeBackground from "../components/DynamicThemeBackground/DynamicThemeBackground"
// import WebGLErrorBoundary from "../components/WebGLErrorBoundary/WebGLErrorBoundary"
import ColumnNavigation from "../components/HomeComponents/ColumnNavigation"
import CircularNavigation from "../components/HomeComponents/CircularNavigation"

const Dynamic3DSceneRenderer = lazy(
  () => import("../components/Dynamic3DSceneRenderer/Dynamic3DSceneRenderer")
)

export default function Home() {
  const lightBg = "/images/background/bg-home/DALL·E 2024-10-28 21.03.12-Home-Light.webp"
  const darkBg = "/images/background/bg-home/DALL·E 2024-10-18 21.16.27-Home-Dark.webp"

  return (
    <div>
      <DynamicThemeBackground lightBg={lightBg} darkBg={darkBg} />
      {/* <Navigation /> */}
      <nav className="pointer-events-auto fixed z-10 flex h-screen w-full items-center justify-center">
        <ColumnNavigation />
        <CircularNavigation />
      </nav>
      {/* <WebGLErrorBoundary> */}
      <Suspense fallback={<div>Loading 3D Scene...</div>}>
        <Dynamic3DSceneRenderer
          ModelComponent="DroneX"
          modelProps={{ scale: 0.5 }}
          cameraPosition={[0, 0, 5]}
          enableTracking={true}
          threshold={0.001}
          // lights={[
          //   { type: "ambientLight", intensity: 0.5, color: "#ffffff" },
          //   {
          //     type: "directionalLight",
          //     position: [5, 5, 5],
          //     intensity: 1,
          //     color: "#ffffff",
          //   },
          //   {
          //     type: "pointLight",
          //     position: [-5, -5, -5],
          //     intensity: 0.5,
          //     color: "#ff0000",
          //   },
          //   {
          //     type: "spotLight",
          //     position: [0, 5, 0],
          //     angle: 0.3,
          //     penumbra: 0.5,
          //     intensity: 1,
          //     color: "#00ff00",
          //   },
          // ]}
        />
      </Suspense>
      {/* </WebGLErrorBoundary> */}
    </div>
  )
}
