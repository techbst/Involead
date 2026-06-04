const fs = require('fs')
const site = process.env.SITEMAP_URL || 'http://localhost:3000'
const pages = ['/', '/about']

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
        .map(
            (p) => `  <url>\n    <loc>${site}${p}</loc>\n  </url>`
        )
        .join('\n')}
</urlset>`

fs.writeFileSync('public/sitemap.xml', xml)
console.log('Sitemap generated')
