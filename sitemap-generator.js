const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.drukquest.com';  // Your live site URL

// Manually list your website routes here:
const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/tours', changefreq: 'weekly', priority: 0.9 },
    { url: '/tours/adventure', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.8 },
    // Add all other routes here manually
];

// Function to build sitemap XML
function buildSitemap(routes) {
    const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    const xmlFooter = `</urlset>`;

    const urlEntries = routes.map(route => {
        return `
  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    }).join('');

    return xmlHeader + urlEntries + '\n' + xmlFooter;
}

// Write sitemap.xml file
const sitemap = buildSitemap(routes);
fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!');
