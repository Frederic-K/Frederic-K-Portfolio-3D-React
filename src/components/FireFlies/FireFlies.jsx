import { useEffect, useState } from "react"

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
})

export default function FireFlies() {
  const [fireflies, setFireflies] = useState([])

  useEffect(() => {
    // Initialize with 10 fireflies
    setFireflies(Array.from({ length: 10 }, createFirefly))

    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly()
      setFireflies((currentFireflies) => [...currentFireflies.slice(-14), newFirefly])
    }

    const interval = setInterval(addFireflyPeriodically, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed left-0 top-0 -z-20 h-full w-full overflow-hidden">
      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="absolute size-3 animate-fireFliesMove rounded-full bg-firefly-radial opacity-70"
          style={{
            top: firefly.top,
            left: firefly.left,
            animationDuration: firefly.animationDuration,
          }}
        ></div>
      ))}
    </div>
  )
}
