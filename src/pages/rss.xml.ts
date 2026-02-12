import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL | undefined }) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Muzammil Mahmud — Blog',
    description: 'Blog posts and updates from Muzammil Mahmud',
    site: context.site ?? new URL('https://muzammilmahmud.github.io'),
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? undefined,
      pubDate: post.data.date,
      link: `/blog/${post.slug}`,
    })),
    customData: '<language>en-us</language>',
  });
}
