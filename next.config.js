const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([], {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'Cache-Control: no-cache, no-store, max-age=0, must-revalidate',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  compress: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: false,
  },
  trailingSlash: true,
})
