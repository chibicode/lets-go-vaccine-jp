module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/og',
        has: [
          {
            type: 'query',
            key: 'v',
            value: '(?<version>.*)'
          }
        ],
        destination: '/api/og/:version',
        permanent: true
      }
    ]
  }
}
