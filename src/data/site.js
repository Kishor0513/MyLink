export const SITE_NAME = 'Kishor Chaudhary';
export const SITE_HANDLE = 'Kishor0513';
export const SITE_ORIGIN = 'https://www.kishorchaudhary.com.np';
export const SITE_DESCRIPTION =
	'Full Stack Developer specializing in high-performance web architectures, scalable systems, and immersive digital experiences.';

export const buildAbsoluteUrl = (pathname = '/') => {
	const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return new URL(normalizedPath, SITE_ORIGIN).href;
};
