import { useState, useCallback } from "react"

export function useCarousel(length: number) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1))
  }, [length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1))
  }, [length])

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return { currentIndex, goToPrevious, goToNext, goTo }
}
