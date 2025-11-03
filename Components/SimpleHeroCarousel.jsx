import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SimpleHeroCarousel({ children }) {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/hero-config.json')
        const config = await response.json()
        
        // Filter by date range
        const now = new Date()
        const activeImages = config.images.filter(img => {
          const start = new Date(img.startDate)
          const end = img.endDate ? new Date(img.endDate) : null
          
          return start <= now && (!end || end >= now)
        })
        
        setImages(activeImages)
        setLoading(false)
      } catch (error) {
        console.error('Error loading hero images:', error)
        setLoading(false)
      }
    }

    fetchImages()
    
    // Refresh every minute to check for new images
    const interval = setInterval(fetchImages, 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    if (images.length <= 1) return
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [images.length])

  // If no active images, show default content (orb)
  if (loading || images.length === 0) {
    return <>{children}</>
  }

  return (
    <div className="relative w-full h-full">
      {/* Image Carousel */}
      <AnimatePresence mode="wait">
        {images.map((img, index) => (
          index === currentIndex && (
            <motion.div
              key={img.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              {img.link ? (
                <a href={img.link} className="block w-full h-full">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              )}
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content overlay (your existing hero content) */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Image indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
