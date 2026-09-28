import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirections pour les anciennes URLs (SEO : évite les 404 indexées par Google)
  async redirects() {
    return [
      {
        source: "/plaquette-mediahub-2025.pdf",
        destination: "/plaquette-mediahub-2026-2027.pdf",
        permanent: true,
      },
    ];
  },

  // Security headers for SEO and security best practices
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
