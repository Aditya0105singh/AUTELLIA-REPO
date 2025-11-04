import { useEffect, useState } from 'react'
import { urlFor } from '../src/lib/sanity'
import { motion, AnimatePresence } from 'framer-motion'

export default function HeroCarouselDirect({ children }) {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching hero images using direct fetch...')
        
        // Use proxy to avoid CORS issues
        const query = encodeURIComponent('*[_type == "heroImage" && isActive == true] | order(priority desc, startDate asc)')
        const dataset = 'production'
        const apiVersion = '2023-10-01'
        
        // Using proxy through Vite server
        const url = `/api/sanity/v${apiVersion}/data/query/${dataset}?query=${query}`
        
        console.log('Fetching from URL:', url)
        
        const response = await fetch(url)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        console.log('Direct fetch response:', data)
        
        if (!data.result) {
          console.log('No result in response')
          setLoading(false)
          return
        }
        
        // Filter by date range
        const now = new Date()
        const activeImages = data.result.filter(img => {
          if (!img.startDate) return false
          
          const start = new Date(img.startDate)
          const end = img.endDate ? new Date(img.endDate) : null
          
          const isActive = start <= now && (!end || end >= now)
          console.log(`Image ${img.title}: Start=${start}, End=${end}, Active=${isActive}`)
          
          return isActive
        })
        
        console.log('Active images after filtering:', activeImages)
        setImages(activeImages)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching hero images:', error)
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        })
        setLoading(false)
      }
    }

    fetchImages()
    
    // Refresh every 5 minutes to check for new images
    const interval = setInterval(fetchImages, 5 * 60 * 1000)
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
    <>
      {/* Image Carousel Background - Below everything */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          {images.map((img, index) => (
            index === currentIndex && (
              <motion.div
                key={img._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                {/* Image */}
                <picture>
                  {/* Mobile image - portrait optimized */}
                  <source 
                    media="(max-width: 640px)" 
                    srcSet={urlFor(img.image).width(750).height(1334).fit('crop').url()}
                  />
                  {/* Desktop image */}
                  <img
                    src={urlFor(img.image).width(1920).height(1080).fit('crop').url()}
                    alt={img.altText}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </picture>
                
                {/* Dark Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
                
                {/* Optional Link */}
                {img.link && (
                  <a 
                    href={img.link} 
                    className="absolute inset-0 z-10"
                    aria-label={img.altText}
                  />
                )}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Fallback content (Orb) when no images - Above image layer */}
      <div className="relative z-1">
        {children}
      </div>

      {/* Image indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-6 sm:w-8' 
                  : 'bg-white/50 hover:bg-white/75 w-1.5 sm:w-2'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </>
  )
}
