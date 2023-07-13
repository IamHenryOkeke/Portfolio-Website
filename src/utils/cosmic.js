import { createBucketClient } from '@cosmicjs/sdk';

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.VITE_COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.VITE_COSMIC_READ_KEY,
});

export async function getAllPostsWithSlug() {
    try {
      const data = await cosmic.objects.find({
        type: 'projects',
        props: 'title,slug,metadata',
      })
      return data.objects
    } 
    catch (error) {
      console.log(error)
    }
}
