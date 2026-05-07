// src/components/ScrollToTop.tsx
import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'

export function ScrollToTop() {
  // ParsedLocation has a top‑level `pathname` field
  const { pathname } = useLocation() // ✔︎ ParsedLocation → { href, pathname, search, … } :contentReference[oaicite:0]{index=0}

  useEffect(() => {
    // jump to top on every path change
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
