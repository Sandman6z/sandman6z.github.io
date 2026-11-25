import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
const escape = (s: string) => s.replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));
export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('posts', ({data}) => !data.draft)).sort((a,b) => b.data.date.valueOf()-a.data.date.valueOf());
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Sandman 的文章</title><link>${site}</link><description>技术、实践与想法。</description><language>zh-CN</language>${posts.map(post => `<item><title>${escape(post.data.title)}</title><link>${new URL(`/blog/${post.id}/`, site)}</link><guid>${new URL(`/blog/${post.id}/`, site)}</guid><description>${escape(post.data.description)}</description><pubDate>${post.data.date.toUTCString()}</pubDate></item>`).join('')}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
