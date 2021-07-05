import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'ofbdf7xi',
  dataset: 'production',
  apiVersion: 'v2021-06-01',
  useCdn: true,
})

export default client