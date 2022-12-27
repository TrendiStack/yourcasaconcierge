export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'firstLineOfTitle',
      title: 'First Line of Title',
      type: 'string',
    },
    {
      name: 'secondLineOfTitle',
      title: 'second Line of Title',
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
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'number',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'paragraph',
              title: 'Paragraph',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
;("Let's get to know each other")
