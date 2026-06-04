const fs = require('fs')
const path = require('path')
const src = path.resolve(process.cwd(), '.env.example')
const dst = path.resolve(process.cwd(), '.env.local')
if (!fs.existsSync(dst) && fs.existsSync(src)) {
    fs.copyFileSync(src, dst)
    console.log('.env.local created from .env.example')
} else if (fs.existsSync(dst)) {
    console.log('.env.local already exists')
} else {
    console.log('.env.example not found; skipping .env.local creation')
}
