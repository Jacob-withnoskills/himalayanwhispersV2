const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

async function generateSitemap() {
    const hostname = 'https://drukquest.com';
    const sitemapPath = resolve(__dirname, 'public', 'sitemap.xml');

    const smStream = new SitemapStream({ hostname });
    const writeStream = createWriteStream(sitemapPath);

    smStream.pipe(writeStream);

    // Write URLs
    smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
    smStream.write({ url: '/contact-us', changefreq: 'monthly', priority: 0.8 });
    // Add more routes as needed

    smStream.end();

    await streamToPromise(smStream);

    console.log('Sitemap generated at:', sitemapPath);
}

generateSitemap().catch(console.error);
