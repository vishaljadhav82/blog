export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://www.digitalkatta.co.in/sitemap.xml',
    }
  }