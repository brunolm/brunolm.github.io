module.exports = {
  async redirects() {
    return [
      {
        source: '/so',
        destination: 'https://stackoverflow.com/users/340760/brunolm',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/brunolm/',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/brunolm',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/BrunoLM7',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UCMandQh49QaAH2ZfHWZdEFA',
        permanent: true,
      },
    ]
  },
}
