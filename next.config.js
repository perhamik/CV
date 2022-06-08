const withPlugins = require('next-compose-plugins')

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';  
`

const securityHeaders = [
  // { key: 'Cache-Control', value: 'Cache-Control: no-cache, no-store, max-age=0, must-revalidate' },
  { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
]

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
