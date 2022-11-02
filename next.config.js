const headers = async () => [
  {
    // Apply these headers to all routes in your application.
    source: '/:path*',
    headers: [
      {
        key: 'Cache-Control',
        value: 'Cache-Control: no-cache, no-store, max-age=0, must-revalidate',
      },
      {
        key: 'Access-Control-Allow-Origin',
        value: '*',
      },
    ],
  },
]

const nextConfig = {
  headers: headers,
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
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
}

module.exports = nextConfig
