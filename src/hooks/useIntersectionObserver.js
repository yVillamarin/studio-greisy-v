import { useState, useEffect, useRef } from 'react'

export default function useIntersectionObserver(threshold = 0.15) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.unobserve(node)
        }
      },
      { root: null, rootMargin: '0px', threshold }
    )

    observer.observe(node)

    return () => observer.unobserve(node)
  }, [threshold])

  return { ref, animated }
}