import { useState, useEffect, useRef, useCallback } from 'react'

export default function useCarousel(totalSlides, autoplayInterval = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoplayRef = useRef(null)

  const updateSlide = useCallback(
    (newSlide) => {
      if (newSlide < 0) {
        setCurrentSlide(totalSlides - 1)
      } else if (newSlide >= totalSlides) {
        setCurrentSlide(0)
      } else {
        setCurrentSlide(newSlide)
      }
    },
    [totalSlides]
  )

  const moveCarousel = useCallback(
    (direction) => {
      updateSlide(currentSlide + direction)
      resetAutoplay()
    },
    [currentSlide, updateSlide]
  )

  const goToSlide = useCallback(
    (index) => {
      updateSlide(index)
      resetAutoplay()
    },
    [updateSlide]
  )

  const startAutoplay = useCallback(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, autoplayInterval)
  }, [totalSlides, autoplayInterval])

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    startAutoplay()
  }, [startAutoplay])

  useEffect(() => {
    startAutoplay()
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [startAutoplay])

  return { currentSlide, moveCarousel, goToSlide }
}