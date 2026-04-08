"use client"

import { useRef, useEffect, useState } from "react"

const REFERENCE_WIDTH = 800
const REFERENCE_HEIGHT = 600

export function PdfThumbnail({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.3)

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect
      setScale(width / REFERENCE_WIDTH)
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <iframe
        src={`${url}#toolbar=0&navpanes=0&scrollbar=0&page=1`}
        style={{
          width: REFERENCE_WIDTH,
          height: REFERENCE_HEIGHT,
          border: "none",
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          pointerEvents: "none",
        }}
        tabIndex={-1}
        aria-hidden="true"
        title=""
      />
    </div>
  )
}
