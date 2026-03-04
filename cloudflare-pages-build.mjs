import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), '.open-next');

// 1. Ensure the directory exists
if (!fs.existsSync(outDir)) {
    console.error('.open-next directory not found. Did the build fail?');
    process.exit(1);
}

// 2. Move assets to root so they are served correctly by Cloudflare Pages
const assetsDir = path.join(outDir, 'assets');
if (fs.existsSync(assetsDir)) {
    const moveFiles = (src, dest) => {
        const files = fs.readdirSync(src);
        files.forEach(file => {
            const srcPath = path.join(src, file);
            const destPath = path.join(dest, file);
            if (fs.statSync(srcPath).isDirectory()) {
                if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
                moveFiles(srcPath, destPath);
            } else {
                fs.renameSync(srcPath, destPath);
            }
        });
    };
    moveFiles(assetsDir, outDir);
    console.log('Moved static assets to .open-next root.');
}

// 3. Create _worker.js to route to OpenNext worker
const workerContent = `export { default } from "./worker.js";`;
fs.writeFileSync(path.join(outDir, '_worker.js'), workerContent);

// 4. Create _routes.json to route all traffic to the worker except static assets
const routesConfig = {
    version: 1,
    include: ["/*"],
    exclude: [
        "/_next/*",
        "/favicon.ico",
        "/file.svg",
        "/globe.svg",
        "/next.svg",
        "/vercel.svg",
        "/window.svg",
        "/images/*"
    ]
};
fs.writeFileSync(path.join(outDir, '_routes.json'), JSON.stringify(routesConfig, null, 2));

console.log('Successfully generated _worker.js and _routes.json for Cloudflare Pages.');
