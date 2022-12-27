// connect to sanity.io using react
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'zg14gc4v',
  dataset: 'production',
  apiVersion: '2022-12-27',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = source => {
  return builder.image(source);
};
