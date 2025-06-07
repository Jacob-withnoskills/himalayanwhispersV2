const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

(async () => {
    const sitemapStream = new SitemapStream({ hostname: 'https://www.drukquest.com' });

    const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));

  
    sitemapStream.pipe(writeStream);

 
    sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
    sitemapStream.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
    sitemapStream.write({ url: '/packages', changefreq: 'monthly', priority: 0.8 });
    sitemapStream.write({ url: '/faq', changefreq: 'monthly', priority: 0.6 });
    sitemapStream.write({ url: '/contact', changefreq: 'monthly', priority: 0.7 });

    sitemapStream.end();


    await streamToPromise(sitemapStream);

    console.log('✅ Sitemap generated successfully at /public/sitemap.xml');
})();
