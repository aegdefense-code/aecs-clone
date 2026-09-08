import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const SSR_DIR = path.resolve(__dirname, '../dist-ssr');

const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/services/product-manufacturing',
  '/services/npd',
  '/services/fea',
  '/services/design',
  '/services/prototyping',
  '/services/testing',
  '/services/tyre-testing',
  '/materials',
  '/materials/rubber',
  '/materials/plastic',
  '/materials/composite',
  '/industries',
  '/industries/automotive',
  '/industries/marine',
  '/industries/medical',
  '/industries/consumer-sports',
  '/ai',
  '/resources',
  '/policies/merchant',
  '/policies/legal',
  '/policies/privacy',
  '/policies/terms'
];

async function prerender() {
  console.log('⚡ Starting SSG pre-rendering...');

  const templatePath = path.join(DIST_DIR, 'index.html');
  const pristinePath = path.join(DIST_DIR, '__template.html');

  if (!fs.existsSync(templatePath) && !fs.existsSync(pristinePath)) {
    throw new Error(`Client build not found at ${templatePath}. Run "vite build" first.`);
  }

  // Preserve clean base template before any files are modified
  let pristineTemplate;
  if (fs.existsSync(pristinePath)) {
    pristineTemplate = fs.readFileSync(pristinePath, 'utf-8');
  } else {
    pristineTemplate = fs.readFileSync(templatePath, 'utf-8');
    fs.writeFileSync(pristinePath, pristineTemplate, 'utf-8');
  }

  const serverEntryPath = path.join(SSR_DIR, 'entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`SSR build not found at ${serverEntryPath}.`);
  }

  // Import compiled SSR entry
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  let renderedCount = 0;

  for (const route of routes) {
    try {
      const helmetContext = {};
      const { appHtml } = render(route, helmetContext);

      // 1. Extract title
      const titleMatch = appHtml.match(/<title>([\s\S]*?)<\/title>/i);
      const pageTitle = titleMatch ? titleMatch[1] : 'AECS | American Engineering Consultancy Services';

      // 2. Extract meta tags
      const metaMatches = appHtml.match(/<meta[^>]*>/gi) || [];

      // 3. Extract canonical link
      const canonicalMatch = appHtml.match(/<link[^>]*rel=["']canonical["'][^>]*>/i);

      // 4. Extract structured data jsonld
      const jsonLdMatches = appHtml.match(/<script type=["']application\/ld\+json["']>[\s\S]*?<\/script>/gi) || [];

      let html = pristineTemplate;

      // Replace template title with page-specific title
      html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${pageTitle}</title>`);

      // Collect head injections
      const headInjections = [
        ...metaMatches,
        canonicalMatch ? canonicalMatch[0] : null,
        ...jsonLdMatches
      ].filter(Boolean);

      if (headInjections.length > 0) {
        html = html.replace('</head>', `    ${headInjections.join('\n    ')}\n  </head>`);
      }

      // Clean metadata elements from appHtml so they do not duplicate in #root
      let cleanedAppHtml = appHtml;
      if (titleMatch) {
        cleanedAppHtml = cleanedAppHtml.replace(titleMatch[0], '');
      }
      for (const m of metaMatches) {
        cleanedAppHtml = cleanedAppHtml.replace(m, '');
      }
      if (canonicalMatch) {
        cleanedAppHtml = cleanedAppHtml.replace(canonicalMatch[0], '');
      }
      for (const j of jsonLdMatches) {
        cleanedAppHtml = cleanedAppHtml.replace(j, '');
      }

      // Inject cleaned app HTML into pristine #root
      html = html.replace('<div id="root"></div>', `<div id="root">${cleanedAppHtml}</div>`);

      // Determine output file path
      if (route === '/') {
        fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html, 'utf-8');
      } else {
        const routePath = route.slice(1);
        const targetDir = path.join(DIST_DIR, routePath);
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
        // Also write .html file for cleanUrls compatibility (e.g. dist/services/fea.html)
        const parentDir = path.dirname(path.join(DIST_DIR, `${routePath}.html`));
        fs.mkdirSync(parentDir, { recursive: true });
        fs.writeFileSync(path.join(DIST_DIR, `${routePath}.html`), html, 'utf-8');
      }

      renderedCount++;
      console.log(`  ✓ Pre-rendered: ${route}`);
    } catch (err) {
      console.error(`  ✗ Error rendering ${route}:`, err.message);
    }
  }

  console.log(`✨ Successfully pre-rendered ${renderedCount}/${routes.length} routes!`);

  // Clean up temporary pristine template file
  if (fs.existsSync(pristinePath)) {
    fs.unlinkSync(pristinePath);
  }

  // Clean up temporary SSR build directory
  if (fs.existsSync(SSR_DIR)) {
    fs.rmSync(SSR_DIR, { recursive: true, force: true });
  }
}

prerender().catch(err => {
  console.error('Fatal pre-rendering error:', err);
  process.exit(1);
});
