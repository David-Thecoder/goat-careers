import { legends } from '../src/content/legends';
import { createUniverseEdges } from '../src/features/universe/universeEngine';
import { writeFileSync } from 'node:fs';

const quote = (value: string | null | undefined) => value == null ? 'null' : `'${value.replaceAll("'", "''")}'`;
const json = (value: unknown) => `${quote(JSON.stringify(value))}::jsonb`;
const slugify = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const lines: string[] = [
  "insert into public.sports (name, slug) values ('Football', 'football'), ('Basketball', 'basketball') on conflict (slug) do update set name = excluded.name;",
];

for (const legend of legends) {
  lines.push(`
insert into public.legends (
  sport_id, name, short_name, slug, title, short_bio, hero_quote,
  primary_color, secondary_color, status, nationality, era,
  theme, hero, stats, legacy, sport_dna, discovery, passport_template
) values (
  (select id from public.sports where slug = ${quote(legend.sport)}),
  ${quote(legend.name)}, ${quote(legend.shortName)}, ${quote(legend.slug)},
  ${quote(legend.hero.title)}, ${quote(legend.hero.thesis)}, ${quote(legend.hero.thesis)},
  ${quote(legend.theme.accent)}, ${quote(legend.theme.secondary)}, 'published',
  ${quote(legend.country)}, ${quote(legend.era)}, ${json(legend.theme)}, ${json(legend.hero)},
  ${json(legend.stats)}, ${json(legend.legacy)}, ${json(legend.sportDNA)},
  ${json(legend.discovery)}, ${json(legend.passport)}
) on conflict (slug) do update set
  sport_id = excluded.sport_id, name = excluded.name, short_name = excluded.short_name,
  title = excluded.title, short_bio = excluded.short_bio, hero_quote = excluded.hero_quote,
  primary_color = excluded.primary_color, secondary_color = excluded.secondary_color,
  status = excluded.status, nationality = excluded.nationality, era = excluded.era,
  theme = excluded.theme, hero = excluded.hero, stats = excluded.stats,
  legacy = excluded.legacy, sport_dna = excluded.sport_dna,
  discovery = excluded.discovery, passport_template = excluded.passport_template;`);

  legend.chapters.forEach((chapter, index) => lines.push(`
insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = ${quote(legend.slug)}),
  ${quote(chapter.title)}, ${quote(chapter.id || slugify(chapter.title))},
  ${quote(chapter.summary)}, ${quote(chapter.period)}, ${quote(chapter.tone)},
  ${json(chapter.beats)}, ${index}
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;`));

  legend.legendaryMoments.forEach((moment, index) => lines.push(`
insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = ${quote(legend.slug)}),
  ${quote(moment.title)}, ${quote(slugify(moment.title))}, ${quote(moment.context)},
  ${quote(moment.whyItMatters)},
  ${moment.date && /^\d{4}-\d{2}-\d{2}$/.test(moment.date) ? quote(moment.date) : 'null'},
  ${moment.date?.match(/\d{4}/)?.[0] ?? 'null'}, ${index}
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;`));
}

lines.push(`delete from public.timeline_events where legend_id in (select id from public.legends where slug in (${legends.map((legend) => quote(legend.slug)).join(', ')}));`);
for (const legend of legends) {
  legend.timeline.forEach((event) => lines.push(`
insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = ${quote(legend.slug)}),
  ${quote(event.title)}, ${quote(event.description)},
  ${event.year.match(/\d{4}/)?.[0] ?? 1900}, ${quote(legend.era)}
);`));
}

for (const edge of createUniverseEdges(legends)) {
  lines.push(`
insert into public.relationships (
  source_legend_id, target_legend_id, relationship_type, title, description, strength
) values (
  (select id from public.legends where slug = ${quote(edge.from)}),
  (select id from public.legends where slug = ${quote(edge.to)}),
  ${quote(edge.type)}, ${quote(edge.label)}, ${quote(edge.reason)}, ${edge.weight}
) on conflict (source_legend_id, target_legend_id, relationship_type) do update set
  title = excluded.title, description = excluded.description, strength = excluded.strength;`);
}

const output = `${lines.join('\n')}\n`;
const destination = process.argv[2];
if (destination) writeFileSync(destination, output, 'utf8');
else process.stdout.write(output);
