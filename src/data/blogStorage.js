import { blogPosts as staticPosts } from './blogPosts';

const STORAGE_KEY = 'kishor_blog_posts';

function getStoredPosts() {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			const parsed = JSON.parse(stored);
			if (Array.isArray(parsed)) return parsed;
		}
	} catch {}
	return [];
}

export function getBlogPosts() {
	const stored = getStoredPosts();
	if (stored.length === 0) return staticPosts;

	const merged = [...staticPosts];
	for (const sp of stored) {
		const idx = merged.findIndex((p) => p.slug === sp.slug);
		if (idx !== -1) {
			merged[idx] = sp;
		} else {
			merged.push(sp);
		}
	}
	return merged;
}

export function saveBlogPosts(posts) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function createPost(post) {
	const stored = getStoredPosts();
	stored.push(post);
	saveBlogPosts(stored);
}

export function updatePost(slug, updates) {
	const stored = getStoredPosts();
	const idx = stored.findIndex((p) => p.slug === slug);
	if (idx !== -1) {
		stored[idx] = { ...stored[idx], ...updates };
		saveBlogPosts(stored);
	}
}

export function deletePost(slug) {
	const stored = getStoredPosts();
	saveBlogPosts(stored.filter((p) => p.slug !== slug));
}

export function getPostBySlug(slug) {
	return getBlogPosts().find((p) => p.slug === slug);
}

export function importPosts(posts) {
	saveBlogPosts(posts);
}
