module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
