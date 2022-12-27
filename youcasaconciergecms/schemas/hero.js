export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'heroTitleSmall',
      title: 'Small Title',
      type: 'string',
    },
    {
      name: 'heroTitleLarge',
      title: 'Large Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
