"use client"

import { useEffect, useState } from "react"

const Slider = () => {
  const images = ["/square-blue.png", "/square-red.png", "/square-yellow.png"]

  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused, images.length])

  return (
    <div className="w-full h-full relative">
      {/* Slides */}
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={`object-cover w-full h-full rounded-lg absolute top-0 left-0 transition-opacity duration-700 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ pointerEvents: idx === current ? "auto" : "none" }}
        />
      ))}
      {/* Paginators là hàng các chấm tròn */}
      <div
        className="absolute bottom-3 left-0 w-full flex justify-center items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none ${
                idx === current
                  ? "bg-white border border-gray-400"
                  : "bg-gray-300"
              }`}
              style={{ display: "inline-block" }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
