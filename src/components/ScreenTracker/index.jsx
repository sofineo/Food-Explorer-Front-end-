import React, { useEffect, useState } from 'react'

export default function ScreenWidthTracker() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>Current screen width: {screenWidth}</div>
  )
}

