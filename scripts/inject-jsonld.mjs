import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const BLOG_DIR = path.join(DIST, 'blog');

const readHtmlMeta = (html) => {
	const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
	const descMatch = html.match(
		/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i,
	);
	const canonicalMatch = html.match(
		/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i,
	);

	return {
		title: titleMatch ? titleMatch[1].trim() : null,
		description: descMatch ? descMatch[1].trim() : null,
		canonical: canonicalMatch ? canonicalMatch[1].trim() : null,
	};
};

async function injectIntoFile(filePath) {
	try {
		const html = await fs.readFile(filePath, 'utf8');
		const { title, description, canonical } = readHtmlMeta(html);
		if (!canonical) {
			console.warn(`${filePath} has no canonical; skipping JSON-LD injection.`);
			return;
		}

		const blogPosting = {
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: title || '',
			description: description || '',
			url: canonical,
			author: { '@type': 'Person', name: 'Kishor Chaudhary' },
			mainEntityOfPage: canonical,
		};

		const breadcrumb = {
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kishorchaudhary.com.np/' },
			{ '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kishorchaudhary.com.np/blog/' },
				{
					'@type': 'ListItem',
					position: 3,
					name: title || '',
					item: canonical,
				},
			],
		};

		const jsonLdArray = [breadcrumb, blogPosting];
		const script =
			'\n\t\t<script type="application/ld+json">' +
			JSON.stringify(jsonLdArray) +
			'</script>\n';

		if (html.includes('</head>')) {
			const updated = html.replace('</head>', script + '\n</head>');
			await fs.writeFile(filePath, updated, 'utf8');
			console.log('Injected JSON-LD into ' + filePath);
		} else {
			console.warn('No </head> tag found in ' + filePath + ', skipping');
		}
	} catch (err) {
		console.error('Failed to inject into ' + filePath + ':', err.message);
	}
}

(async () => {
	try {
		const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
		for (const entry of entries) {
			if (entry.isDirectory()) {
				const candidate = path.join(BLOG_DIR, entry.name, 'index.html');
				// Some posts may be nested; check recursively
				if (await exists(candidate)) {
					await injectIntoFile(candidate);
				} else {
					// try nested directories
					const nested = path.join(BLOG_DIR, entry.name);
					const subEntries = await fs.readdir(nested, { withFileTypes: true });
					for (const sub of subEntries) {
						if (sub.isDirectory()) {
							const subFile = path.join(nested, sub.name, 'index.html');
							if (await exists(subFile)) {
								await injectIntoFile(subFile);
							}
						}
					}
				}
			}
		}
		console.log('JSON-LD injection complete.');
	} catch (err) {
		console.error('Injection script failed:', err.message);
	}
})();

async function exists(p) {
	try {
		await fs.access(p);
		return true;
	} catch {
		return false;
	}
}
