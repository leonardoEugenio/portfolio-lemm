'use client'

import { useEffect, useState } from 'react'

export function LightCursorContent({
  children,
}: {
  children: React.ReactNode
}) {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseCoordinates({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Limpa o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative size-full overflow-hidden">
      {children}
      <div
        className="absolute z-40 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-sky-300/40 to-action-blue-500/0 opacity-50 rounded-full pointer-events-none blur-3xl transition-all duration-75"
        style={{
          left: `${mouseCoordinates.x}px`,
          top: `${mouseCoordinates.y}px`,
        }}
      ></div>
    </div>
  )
}
