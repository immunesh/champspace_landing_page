"use client"

import { useEffect, useState } from "react"

export function useCounter(target: number, duration = 1800, isVisible = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let current = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, isVisible])

  return count
}
