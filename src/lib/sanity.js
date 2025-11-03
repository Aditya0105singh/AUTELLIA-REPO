import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Using correct configuration for public access
export const client = createClient({
  projectId: 'r5o871tr', // Your project ID from Sanity (fixed typo)
  dataset: 'production',
  apiVersion: '2023-10-01', // Using stable API version
  useCdn: false, // Disable CDN to avoid potential issues
  withCredentials: false, // Ensure no credentials are sent
  ignoreBrowserTokenWarning: true,
})

// Helper function to generate image URLs
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
