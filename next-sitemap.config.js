/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://content-sphere-one.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*', '/api/*', '/_next/*', '/404', '/500'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/api/', '/_next/', '/private/', '/studio/'],
        },
      ],
    },
      transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'daily';
      
      // Homepage gets highest priority
      if (path === '/') {
        priority = 1.0;
        changefreq = 'daily';
      }
      // Blog posts get high priority
      else if (path.startsWith('/blog/') || path.startsWith('/post/')) {
        priority = 0.8;
        changefreq = 'weekly';
      }
      // Category pages
      else if (path.startsWith('/blog/fashion') || path.startsWith('/blog/technology') || path.startsWith('/blog/business')) {
        priority = 0.6;
        changefreq = 'weekly';
      }
      // About, contact pages
      else if (path === '/about' || path === '/contact') {
        priority = 0.5;
        changefreq = 'monthly';
      }
      
      return {
        loc: path,
        changefreq,
        priority,
        lastmod: new Date().toISOString(),
      };
    },
  };
  