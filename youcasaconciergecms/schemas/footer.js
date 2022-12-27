export default {
  name: 'footer',
  title: 'Footer',
  copyRight: `© ${new Date().getFullYear() - 1} YourCasaConcierge. All rights reserved.`,
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'smallLogo',
      title: 'Small Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
