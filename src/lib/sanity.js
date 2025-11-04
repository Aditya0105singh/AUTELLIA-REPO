import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Using correct configuration for public access
export const client = createClient({
  projectId: 'r5o871tr', // Your project ID from Sanity
  dataset: 'production',
  apiVersion: '2023-10-01', // Using stable API version
  useCdn: true, // Use CDN for production - has permissive CORS and caching
  withCredentials: false, // Ensure no credentials are sent
  ignoreBrowserTokenWarning: true,
})

// Helper function to generate image URLs
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
