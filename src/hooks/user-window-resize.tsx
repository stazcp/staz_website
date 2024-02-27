import { useState, useEffect } from 'react'

const getWindowSize = () => ({ width: window.innerWidth, height: window.innerHeight })

function useWindowSize() {
  const [size, setSize] = useState(getWindowSize())

  useEffect(() => {
    const handleResize = () => {
      setSize(getWindowSize())
    }
    window.addEventListener('resize', handleResize)

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

export default useWindowSize
