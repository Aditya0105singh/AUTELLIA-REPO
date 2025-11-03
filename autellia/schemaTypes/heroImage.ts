import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroImage',
  title: 'Hero Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal name for this hero image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alternative Text',
      type: 'string',
      description: 'For accessibility (required)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      description: 'When this image should start showing',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      description: 'When this image should stop showing (leave empty for no end date)',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to show/hide this image',
      initialValue: true,
    }),
    defineField({
      name: 'link',
      title: 'Link URL (optional)',
      type: 'url',
      description: 'Optional link when image is clicked',
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Higher number = shown first (default: 0)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      isActive: 'isActive',
      startDate: 'startDate',
    },
    prepare(selection) {
      const {title, media, isActive, startDate} = selection
      return {
        title: title,
        subtitle: `${isActive ? '✅ Active' : '❌ Inactive'} | Starts: ${new Date(startDate).toLocaleDateString()}`,
        media: media,
      }
    },
  },
})
