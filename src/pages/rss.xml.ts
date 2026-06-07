import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const essays = (await getCollection('essays', ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  return rss({
    title: 'currentsuspect.me — writing',
    description: 'Essays and thoughts by Dylan Makori.',
    site: context.site ?? 'https://currentsuspect.me',
    items: essays.map((essay) => ({
      title: essay.data.title,
      description: essay.data.description,
      pubDate: essay.data.publishDate,
      link: `/writing/${essay.id}`,
    })),
    customData: '<language>en-us</language>',
  });
}
