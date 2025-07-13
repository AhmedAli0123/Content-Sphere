/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://content-sphere-one.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    outDir: './public',
    priority: 0.7,
    exclude: ['/admin/*', '/api/*', '/_next/*', '/404', '/500', '/studio/*'],
    generateIndexSitemap: false,
    additionalPaths: async (config) => {
      try {
        const { createClient } = await import('next-sanity');
        const { groq } = await import('next-sanity');
        
        // Create Sanity client directly
        const client = createClient({
          projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
          dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
          apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
          useCdn: true,
        });
        
        // Fetch all published blog posts
        const query = groq`
          *[_type == "post" && publishedAt != null] {
            "slug": slug.current,
            publishedAt,
            "lastmod": _updatedAt
          }
        `;
        
        const posts = await client.fetch(query);
        
        return posts.map((post) => ({
          loc: `/blog/${post.slug}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: post.lastmod || post.publishedAt,
        }));
      } catch (error) {
        console.error('Error fetching blog posts for sitemap:', error);
        return [];
      }
    },
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
  