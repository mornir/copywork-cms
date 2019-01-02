export default {
  title: 'Copywork',
  name: 'copywork',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200),
      },
    },
    {
      title: 'Month and Year',
      name: 'date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Primary color',
      name: 'color',
      type: 'string',
      validation: Rule => Rule.regex(/^#\S{6}$/, 'Not a valid HEX code'),
    },
    {
      title: 'ULR of copied page',
      name: 'copiedURL',
      type: 'url',
    },
    {
      title: 'Video of copied page',
      name: 'video',
      type: 'url',
    },
    {
      title: 'CodePen hashid',
      name: 'codepen',
      type: 'string',
    },
  ],
}
