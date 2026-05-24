---
title: 'Why Sitemap.xml Still Matters for Small Sites'
slug: sitemap-and-robots-for-small-sites
path: /blog/sitemap-and-robots-for-small-sites/
description: 'A short guide to keeping sitemap.xml and robots.txt useful on a small portfolio or blog.'
excerpt: 'Even a small site benefits from a clean sitemap because it gives crawlers a direct map of the pages that matter most.'
category: Indexing
readingTime: 5 min read
publishedAt: 2026-05-24
updatedAt: 2026-05-24
tags:
  - Sitemap
  - Robots.txt
  - Indexing
  - SEO
hero: 'A sitemap is the shortest path between your site structure and a crawler’s understanding of it.'
---

## 1. Treat the sitemap like a table of contents

A sitemap is most useful when it only includes pages you actually want indexed. That means keeping it focused on the homepage, blog index, article pages, and any core service pages.

If a page is thin, duplicate, or temporary, it does not belong in the sitemap.

- List your canonical URLs only.
- Use trailing slashes consistently if your host serves them that way.
- Update lastmod when content meaningfully changes.

## 2. Keep robots.txt simple

For a personal website, robots.txt should usually be boring. Allow crawling, point to the sitemap, and avoid blocking pages that should rank.

Blocking too much can make a site harder to understand rather than more private.

- Allow the site by default.
- Add the sitemap URL at the end of the file.
- Do not block CSS or JavaScript unless you have a strong reason.

## 3. Keep sitemap and navigation in sync

If the sitemap lists a page that the navigation never links to, that is a signal something is out of sync. Search engines may still discover it, but users may not.

For this site, the blog navigation, homepage blog section, and sitemap should all point at the same article URLs.

- Update the sitemap when you add or remove posts.
- Use the same URL format in menus, cards, and canonical tags.
- Check Google Search Console after deploying changes.
