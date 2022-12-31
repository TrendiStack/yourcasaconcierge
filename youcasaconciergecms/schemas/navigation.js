export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'navigation',
      title: 'Navigation',
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
              name: 'path',
              title: 'Path',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
