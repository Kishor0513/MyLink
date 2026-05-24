import matter from 'gray-matter';

// Eagerly load markdown files from the content folder at build time.
const modules = import.meta.glob('../content/posts/*.md', { as: 'raw' });

export async function getAllPosts() {
	const entries = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const raw = await resolver();
			const { data, content } = matter(raw);
			return {
				...data,
				content,
				filepath: path,
				publishedAt: data.publishedAt,
			};
		}),
	);

	// sort by date desc
	return entries.sort(
		(a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
	);
}

export async function getPostBySlug(slug) {
	const posts = await getAllPosts();
	return posts.find((p) => p.slug === slug);
}

export default { getAllPosts, getPostBySlug };
