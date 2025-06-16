"use client"

import { useEffect, useState } from "react"

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    )

    const titleElements = document.querySelectorAll("[data-animate-title]")
    titleElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return { isVisible, visibleSections }
}
