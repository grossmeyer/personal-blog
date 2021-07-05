import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'ofbdf7xi',
  dataset: 'production',
  apiVersion: 'v2021-06-01',
  useCdn: true,
})