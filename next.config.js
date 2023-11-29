/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['ui-avatars.com'],
    },
  }

/*module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ui-avatars.com',
          port: '',
          pathname: '/api/?name=John+Doe',
        },
      ],
    },
  }*/
