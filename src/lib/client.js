import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client  = sanityClient({
    projectId:'6g7pr1o9',
    dataset :'production',
    apiVersion:'2023-05-29',
    useCdn:true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export async function getPosts() {
    const posts = await client.fetch('*[_type == "post"]')
    return posts
} 