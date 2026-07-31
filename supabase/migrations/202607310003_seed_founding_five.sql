insert into public.sports (name, slug) values ('Football', 'football'), ('Basketball', 'basketball') on conflict (slug) do update set name = excluded.name;

insert into public.legends (
  sport_id, name, short_name, slug, title, short_bio, hero_quote,
  primary_color, secondary_color, status, nationality, era,
  theme, hero, stats, legacy, sport_dna, discovery, passport_template
) values (
  (select id from public.sports where slug = 'basketball'),
  'Michael Jordan', 'Jordan', 'michael-jordan',
  'THE STANDARD', 'Michael Jordan did not simply win. He created the vocabulary people still use when they try to explain greatness, pressure and the final shot.', 'Michael Jordan did not simply win. He created the vocabulary people still use when they try to explain greatness, pressure and the final shot.',
  '#e10b18', '#f2f0e8', 'published',
  'USA', '1984–2003', '{"accent":"#e10b18","secondary":"#f2f0e8","glow":"rgba(225,11,24,.34)","visual":"monument"}'::jsonb, '{"title":"THE STANDARD","subtitle":"How competition became a religion","archetype":"The Standard","thesis":"Michael Jordan did not simply win. He created the vocabulary people still use when they try to explain greatness, pressure and the final shot.","tags":["pressure","competition","dynasty","brand"]}'::jsonb,
  '[{"value":"6","label":"NBA titles"},{"value":"6","label":"Finals MVPs"},{"value":"5","label":"MVPs"},{"value":"Jordan Brand","label":"Nike empire"}]'::jsonb, '[{"from":"Jordan","to":"Kobe","link":"Kobe inherits the footwork, the mentality and the obsession with mastery."},{"from":"Kobe","to":"LeBron","link":"LeBron becomes the next global measurement against the standard."},{"from":"LeBron","to":"Curry","link":"Curry changes the sport Jordan helped globalize."}]'::jsonb, '{"sport":"basketball","primary":["pressure","dynasty","clutch","commerce"],"style":"Basketball is told through possessions, systems, rivalries and the mythology of the final shot.","code":"Competition as identity"}'::jsonb,
  '[{"slug":"kobe-bryant","title":"Kobe Bryant — THE OBSESSION","reason":"Because Kobe is the most direct emotional descendant of Jordan."},{"slug":"lebron-james","title":"LeBron James — THE CHOSEN ONE","reason":"Because LeBron lives under the comparison Jordan created."},{"slug":"cristiano-ronaldo","title":"Cristiano Ronaldo — THE IMPOSSIBLE STANDARD","reason":"Because both turned personal standards into global brands."}]'::jsonb, '{"legendId":"michael-jordan","chapters":9,"moments":4,"relationships":8,"sportsUnlocked":["basketball"],"completionHint":"You unlocked the Standard path."}'::jsonb
) on conflict (slug) do update set
  sport_id = excluded.sport_id, name = excluded.name, short_name = excluded.short_name,
  title = excluded.title, short_bio = excluded.short_bio, hero_quote = excluded.hero_quote,
  primary_color = excluded.primary_color, secondary_color = excluded.secondary_color,
  status = excluded.status, nationality = excluded.nationality, era = excluded.era,
  theme = excluded.theme, hero = excluded.hero, stats = excluded.stats,
  legacy = excluded.legacy, sport_dna = excluded.sport_dna,
  discovery = excluded.discovery, passport_template = excluded.passport_template;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'Before the standard', 'childhood',
  'The myth starts with family, competition and the pain of being doubted.', '1963–1981', 'origin',
  '["Childhood becomes the emotional foundation.","The famous cut from the varsity team becomes a storytelling symbol of rejection.","Competition enters the personality early."]'::jsonb, 0
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'North Carolina: the first shot', 'unc',
  'Dean Smith gives structure to the talent and the 1982 title shot gives the world an early preview.', '1981–1984', 'rise',
  '["UNC teaches discipline inside a system.","The freshman hits a national championship shot.","Jordan learns that pressure can be turned into ownership."]'::jsonb, 1
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'Chicago receives a storm', 'draft-bulls',
  'The Bulls get a scorer, but the league slowly realizes it is watching a standard being built.', '1984–1988', 'rise',
  '["The rookie arrives with impossible athletic electricity.","Nike turns a player into a cultural product.","The Air Jordan line begins the sports-business empire."]'::jsonb, 2
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'The Pistons wall', 'pistons',
  'Detroit becomes the punishment that makes Jordan stronger.', '1988–1991', 'conflict',
  '["The Jordan Rules turn physical defense into a mythic obstacle.","Failure forces strength, trust and tactical evolution.","The road to greatness passes through humiliation."]'::jsonb, 3
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'Phil, Scottie and the triangle', 'phil-scottie',
  'Phil Jackson and Scottie Pippen transform individual greatness into a dynasty system.', '1989–1993', 'peak',
  '["Doug Collins had unleashed Jordan; Phil Jackson teaches the Bulls how to win as a unit.","Pippen becomes the essential second force.","The first three-peat creates the public image of inevitability."]'::jsonb, 4
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'Loss, baseball and golf', 'father-baseball-golf',
  'After his father’s death, Jordan leaves basketball, enters baseball and lives inside a strange pause in the myth. Golf remains a repeated window into his obsession and competitive personality.', '1993–1995', 'conflict',
  '["Retirement is not weakness; it is grief, fatigue and escape.","Baseball becomes an act of personal loyalty and reinvention.","Golf reveals the same competitive addiction away from basketball."]'::jsonb, 5
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'I''m back', 'return-72',
  'The return becomes one of the most famous resets in sports history, leading into 72–10.', '1995–1996', 'mythic',
  '["The first comeback is a cultural event.","The Bulls rebuild around hunger and memory.","72–10 turns return into domination."]'::jsonb, 6
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'Flu Game and Last Shot', 'flu-last-shot',
  'The final Bulls chapters become cinema: illness, exhaustion, Utah, one possession, one legacy.', '1997–1998', 'mythic',
  '["The Flu Game becomes pain turned into performance.","The Last Shot becomes the cleanest ending basketball ever produced.","Jordan exits Chicago as a completed myth."]'::jsonb, 7
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'The second comeback', 'wizards-comeback',
  'Washington does not add trophies, but it adds complexity: a legend returns not as a perfect ending, but as a human still attached to competition.', '2001–2003', 'legacy',
  '["The Wizards era shows the cost of never being done.","It complicates the mythology without destroying it.","The standard remains larger than the final chapter."]'::jsonb, 8
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'michael-jordan'),
  'The Shot', 'the-shot', 'Cleveland, elevation, release, explosion.',
  'A playoff killer image is born.',
  null,
  1989, 0
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'michael-jordan'),
  'Dream Team', 'dream-team', 'Barcelona makes NBA greatness global.',
  'Jordan becomes an international symbol.',
  null,
  1992, 1
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'michael-jordan'),
  'Flu Game', 'flu-game', 'Illness, exhaustion, Utah.',
  'Pain becomes part of the standard.',
  null,
  1997, 2
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'michael-jordan'),
  'Last Shot', 'last-shot', 'Final seconds against Utah.',
  'It is the cinematic definition of closure.',
  null,
  1998, 3
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legends (
  sport_id, name, short_name, slug, title, short_bio, hero_quote,
  primary_color, secondary_color, status, nationality, era,
  theme, hero, stats, legacy, sport_dna, discovery, passport_template
) values (
  (select id from public.sports where slug = 'basketball'),
  'Kobe Bryant', 'Kobe', 'kobe-bryant',
  'THE OBSESSION', 'Kobe Bryant turned basketball into a language of study, sacrifice and self-invention. His greatness was not only what he did, but how intensely he tried to master every inch of it.', 'Kobe Bryant turned basketball into a language of study, sacrifice and self-invention. His greatness was not only what he did, but how intensely he tried to master every inch of it.',
  '#7b5cff', '#f4c542', 'published',
  'USA', '1996–2016', '{"accent":"#7b5cff","secondary":"#f4c542","glow":"rgba(123,92,255,.32)","visual":"memory"}'::jsonb, '{"title":"THE OBSESSION","subtitle":"How study became identity","archetype":"The Obsession","thesis":"Kobe Bryant turned basketball into a language of study, sacrifice and self-invention. His greatness was not only what he did, but how intensely he tried to master every inch of it.","tags":["study","sacrifice","mamba","memory"]}'::jsonb,
  '[{"value":"5","label":"NBA titles"},{"value":"81","label":"points in one game"},{"value":"20","label":"Lakers seasons"},{"value":"60","label":"final game points"}]'::jsonb, '[{"from":"Kobe","to":"Jayson Tatum","link":"The next generation studies his footwork and scoring imagination."},{"from":"Kobe","to":"Devin Booker","link":"The midrange craft and Mamba vocabulary carry forward."},{"from":"Kobe","to":"Anthony Edwards","link":"The fearlessness template survives in modern shot creators."}]'::jsonb, '{"sport":"basketball","primary":["study","footwork","pain","killer instinct"],"style":"Basketball becomes a craft room: repetition, film, angles, counters and late-night work.","code":"Mastery through obsession"}'::jsonb,
  '[{"slug":"michael-jordan","title":"Michael Jordan — THE STANDARD","reason":"Because Kobe’s story is impossible without the blueprint."},{"slug":"lebron-james","title":"LeBron James — THE CHOSEN ONE","reason":"Because the league moved from Kobe’s obsession to LeBron’s expectation."},{"slug":"stephen-curry","title":"Stephen Curry — THE REVOLUTION","reason":"Because Curry changes the game Kobe mastered."}]'::jsonb, '{"legendId":"kobe-bryant","chapters":8,"moments":6,"relationships":5,"sportsUnlocked":["basketball"],"completionHint":"You unlocked the Obsession path."}'::jsonb
) on conflict (slug) do update set
  sport_id = excluded.sport_id, name = excluded.name, short_name = excluded.short_name,
  title = excluded.title, short_bio = excluded.short_bio, hero_quote = excluded.hero_quote,
  primary_color = excluded.primary_color, secondary_color = excluded.secondary_color,
  status = excluded.status, nationality = excluded.nationality, era = excluded.era,
  theme = excluded.theme, hero = excluded.hero, stats = excluded.stats,
  legacy = excluded.legacy, sport_dna = excluded.sport_dna,
  discovery = excluded.discovery, passport_template = excluded.passport_template;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Italy: the outsider learns rhythm', 'italy',
  'Growing up in Italy gave Kobe a different relationship with language, isolation and craft.', '1978–1991', 'origin',
  '["He learns to observe before belonging.","Soccer culture and European life shape his footwork imagination.","The outsider feeling becomes fuel."]'::jsonb, 0
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Lower Merion to the NBA', 'lower-merion-draft',
  'Kobe skips college and enters the league as ambition before permission.', '1991–1996', 'rise',
  '["High school stardom becomes a national signal.","The draft trade sends him to Los Angeles.","The teenager arrives inside a franchise built for mythology."]'::jsonb, 1
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Airballs: failure as initiation', 'airballs',
  'The playoff airballs become the first public lesson: embarrassment will not scare him away.', '1997', 'conflict',
  '["He takes the shots others avoid.","The misses become a private contract with work.","The Mamba identity begins before it has a name."]'::jsonb, 2
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Shaq and the three-peat', 'shaq-threepeat',
  'With Shaq and Phil Jackson, Kobe becomes part of a dynasty before becoming its center.', '1999–2002', 'peak',
  '["Shaq is the dominant force; Kobe is the rising blade.","Phil manages talent, ego and triangle structure.","Three titles create glory and unresolved tension."]'::jsonb, 3
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Separation and reconstruction', 'separation',
  'After Shaq leaves, Kobe has to prove obsession can lead a team, not just decorate one.', '2004–2007', 'conflict',
  '["The burden becomes personal.","The scoring explosions answer critics but do not yet complete the story.","81 points becomes proof of individual fire."]'::jsonb, 4
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Beijing: the Redeem Team', 'beijing',
  'The Olympics in Beijing give Kobe a new role: the killer standard for America’s stars.', '2008', 'peak',
  '["He brings defensive seriousness and late-game cruelty.","His presence changes Team USA’s mentality.","International pressure becomes another stage for Mamba identity."]'::jsonb, 5
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Gasol, Boston and redemption', 'gasol-celtics',
  'Pau Gasol gives Kobe the partner needed to transform obsession into two more championships.', '2008–2010', 'mythic',
  '["2008 pain against Boston makes 2010 heavier.","Game 7 is ugly, tense and human.","The fifth ring completes the post-Shaq argument."]'::jsonb, 6
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Achilles and Final 60', 'achilles-final60',
  'The body breaks, but the mythology intensifies. His final game becomes farewell theatre.', '2013–2016', 'legacy',
  '["The Achilles free throws become stubbornness made visible.","The final 60 gives fans one last impossible night.","Dear Basketball transforms the athlete into storyteller."]'::jsonb, 7
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Airballs in Utah', 'airballs-in-utah', 'A young Kobe misses and learns publicly.',
  'Failure becomes the origin story of obsession.',
  null,
  1997, 0
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'kobe-bryant'),
  '81 Points', '81-points', 'Toronto witnesses one of basketball’s wildest scoring nights.',
  'It is individual shot-making pushed near myth.',
  null,
  2006, 1
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Beijing Gold', 'beijing-gold', 'Team USA regains control with Kobe as late-game enforcer.',
  'It proves his mentality travels beyond the Lakers.',
  null,
  2008, 2
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Game 7 vs Celtics', 'game-7-vs-celtics', 'An ugly, tense championship closer.',
  'The fifth ring completes his redemption arc.',
  null,
  2010, 3
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Achilles Free Throws', 'achilles-free-throws', 'Injury, pain, two free throws.',
  'The body breaks but the will refuses to exit.',
  null,
  2013, 4
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Final 60', 'final-60', 'One last night in Los Angeles.',
  'A farewell becomes a performance.',
  null,
  2016, 5
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legends (
  sport_id, name, short_name, slug, title, short_bio, hero_quote,
  primary_color, secondary_color, status, nationality, era,
  theme, hero, stats, legacy, sport_dna, discovery, passport_template
) values (
  (select id from public.sports where slug = 'basketball'),
  'LeBron James', 'LeBron', 'lebron-james',
  'THE CHOSEN ONE', 'LeBron James was treated as a future legend before he became an adult. His career is the story of surviving prophecy, rebuilding identity and stretching greatness across generations.', 'LeBron James was treated as a future legend before he became an adult. His career is the story of surviving prophecy, rebuilding identity and stretching greatness across generations.',
  '#b88a2c', '#7d2031', 'published',
  'USA', '2003–present', '{"accent":"#b88a2c","secondary":"#7d2031","glow":"rgba(184,138,44,.30)","visual":"crown"}'::jsonb, '{"title":"THE CHOSEN ONE","subtitle":"How expectation became endurance","archetype":"The Chosen One","thesis":"LeBron James was treated as a future legend before he became an adult. His career is the story of surviving prophecy, rebuilding identity and stretching greatness across generations.","tags":["expectation","evolution","longevity","responsibility"]}'::jsonb,
  '[{"value":"4","label":"NBA titles"},{"value":"4","label":"MVPs"},{"value":"#1","label":"NBA scoring list"},{"value":"2003+","label":"era carried"}]'::jsonb, '[{"from":"LeBron","to":"Wembanyama","link":"The next chosen prospect inherits a world shaped by LeBron’s pressure model."},{"from":"LeBron","to":"Future generation","link":"Player empowerment, longevity and off-court influence become part of the modern superstar blueprint."}]'::jsonb, '{"sport":"basketball","primary":["expectation","playmaking","longevity","burden"],"style":"Basketball is told as pressure management: reading, carrying, adjusting and surviving comparisons.","code":"Prophecy under load"}'::jsonb,
  '[{"slug":"michael-jordan","title":"Michael Jordan — THE STANDARD","reason":"Because LeBron’s story is constantly judged against Jordan."},{"slug":"stephen-curry","title":"Stephen Curry — THE REVOLUTION","reason":"Because their rivalry changed the modern NBA."},{"slug":"cristiano-ronaldo","title":"Cristiano Ronaldo — THE IMPOSSIBLE STANDARD","reason":"Because both turned longevity into part of the argument."}]'::jsonb, '{"legendId":"lebron-james","chapters":8,"moments":6,"relationships":8,"sportsUnlocked":["basketball"],"completionHint":"You unlocked the Expectation path."}'::jsonb
) on conflict (slug) do update set
  sport_id = excluded.sport_id, name = excluded.name, short_name = excluded.short_name,
  title = excluded.title, short_bio = excluded.short_bio, hero_quote = excluded.hero_quote,
  primary_color = excluded.primary_color, secondary_color = excluded.secondary_color,
  status = excluded.status, nationality = excluded.nationality, era = excluded.era,
  theme = excluded.theme, hero = excluded.hero, stats = excluded.stats,
  legacy = excluded.legacy, sport_dna = excluded.sport_dna,
  discovery = excluded.discovery, passport_template = excluded.passport_template;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'Akron: the promise before the crown', 'akron',
  'The story starts with Gloria, instability, attention and a teenager asked to become a solution.', '1984–2003', 'origin',
  '["Akron is not background; it is the emotional contract.","Media pressure arrives before NBA responsibility.","The Chosen One label becomes both gift and burden."]'::jsonb, 0
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'Cleveland: carrying the first kingdom', 'cleveland-rise',
  'LeBron enters the league as a teenager and rapidly turns a franchise into a national event.', '2003–2007', 'rise',
  '["Rookie promise becomes immediate production.","The 2007 Detroit series announces playoff authorship.","The burden is clear: he is expected to save home."]'::jsonb, 1
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'Boston: the wall before the decision', 'boston-wall',
  'Boston becomes the obstacle that teaches LeBron that talent alone cannot carry every structure.', '2008–2010', 'conflict',
  '["The Celtics create a championship-level wall.","Public impatience grows.","The Decision becomes the most controversial reinvention in basketball media."]'::jsonb, 2
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'Miami: the villain learns control', 'miami',
  'With Wade, Bosh and Spoelstra, LeBron turns criticism into the most complete version of himself.', '2010–2014', 'peak',
  '["Dallas 2011 becomes the collapse that forces mental reconstruction.","2012 starts the redemption.","2013 is an individual summit: power, intelligence, defense and control."]'::jsonb, 3
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'Return: promise rewritten', 'return-cleveland',
  'The return to Cleveland shifts the story from superstar agency to hometown redemption.', '2014–2016', 'mythic',
  '["Kyrie Irving becomes the essential shot-making partner.","Golden State becomes the great tactical rival.","The 3–1 comeback gives Cleveland the image it waited for."]'::jsonb, 4
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'lebron-james'),
  '2018: the solo cathedral', '2018-carry',
  'The 2018 run is a monument to individual control: a player carrying a team through impossible weight.', '2018', 'peak',
  '["Every possession feels like problem solving.","The playoff moments become evidence of basketball IQ under exhaustion.","Even defeat does not erase the scale of the performance."]'::jsonb, 5
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'Lakers and the Bubble', 'lakers-bubble',
  'LeBron changes cities, roles and context again, then wins inside the strangest championship environment.', '2018–2020', 'reinvention',
  '["Los Angeles adds legacy pressure.","The Bubble becomes focus without noise.","The title with Anthony Davis expands the career’s geography."]'::jsonb, 6
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'Scoring King and Paris', 'scoring-paris',
  'The scoring record and Paris 2024 place LeBron inside history as both survivor and elder statesman.', '2023–2024', 'legacy',
  '["The scoring record turns longevity into arithmetic.","Paris 2024 connects him to Curry and Durant in a late-era superteam image.","The story becomes less about proving greatness and more about how long greatness can remain visible."]'::jsonb, 7
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'lebron-james'),
  'Detroit takeover', 'detroit-takeover', 'A young LeBron bends a playoff series.',
  'It announces that he can author postseason history.',
  null,
  2007, 0
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'lebron-james'),
  '2013 Game 7', '2013-game-7', 'Miami pressure, Spurs precision, LeBron control.',
  'A peak-season closing statement.',
  null,
  2013, 1
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'lebron-james'),
  'The Block', 'the-block', 'Game 7, chase-down, Cleveland’s entire wait in one defensive act.',
  'It is the image of the comeback.',
  null,
  2016, 2
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'lebron-james'),
  '2018 Playoff Run', '2018-playoff-run', 'A veteran controls entire series with impossible burden.',
  'It shows individual greatness beyond ring counting.',
  null,
  2018, 3
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'lebron-james'),
  'Bubble Title', 'bubble-title', 'Isolation, Lakers, Anthony Davis, focus.',
  'It adds a strange but meaningful championship context.',
  null,
  2020, 4
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'lebron-james'),
  'Scoring Record', 'scoring-record', 'The all-time scoring mark falls.',
  'Longevity becomes history.',
  null,
  2023, 5
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legends (
  sport_id, name, short_name, slug, title, short_bio, hero_quote,
  primary_color, secondary_color, status, nationality, era,
  theme, hero, stats, legacy, sport_dna, discovery, passport_template
) values (
  (select id from public.sports where slug = 'basketball'),
  'Stephen Curry', 'Curry', 'stephen-curry',
  'THE REVOLUTION', 'Stephen Curry changed not only what counted as a good shot, but what young players believed basketball could be. His career is geometry, joy, danger and proof that gravity can be redesigned.', 'Stephen Curry changed not only what counted as a good shot, but what young players believed basketball could be. His career is geometry, joy, danger and proof that gravity can be redesigned.',
  '#f6c344', '#2d6cdf', 'published',
  'USA', '2009–present', '{"accent":"#f6c344","secondary":"#2d6cdf","glow":"rgba(246,195,68,.28)","visual":"geometry"}'::jsonb, '{"title":"THE REVOLUTION","subtitle":"How distance changed basketball","archetype":"The Revolution","thesis":"Stephen Curry changed not only what counted as a good shot, but what young players believed basketball could be. His career is geometry, joy, danger and proof that gravity can be redesigned.","tags":["shooting","gravity","movement","joy"]}'::jsonb,
  '[{"value":"4","label":"NBA titles"},{"value":"2","label":"MVPs"},{"value":"1st","label":"all-time 3PM"},{"value":"2016","label":"unanimous MVP"}]'::jsonb, '[{"from":"Curry","to":"Modern Basketball","link":"Spacing, pull-up range and off-ball gravity reshape every level of the game."},{"from":"Curry","to":"Next shooters","link":"Young players now train shots that once belonged only to imagination."}]'::jsonb, '{"sport":"basketball","primary":["range","gravity","movement","joy"],"style":"Basketball becomes geometry: space, angles, panic and impossible release points.","code":"Distance as revolution"}'::jsonb,
  '[{"slug":"lebron-james","title":"LeBron James — THE CHOSEN ONE","reason":"Because Curry’s revolution was measured against LeBron’s reign."},{"slug":"kobe-bryant","title":"Kobe Bryant — THE OBSESSION","reason":"Because both turned skill into identity, but through different languages."},{"slug":"michael-jordan","title":"Michael Jordan — THE STANDARD","reason":"Because Curry changes the sport Jordan globalized."}]'::jsonb, '{"legendId":"stephen-curry","chapters":8,"moments":6,"relationships":6,"sportsUnlocked":["basketball"],"completionHint":"You unlocked the Geometry path."}'::jsonb
) on conflict (slug) do update set
  sport_id = excluded.sport_id, name = excluded.name, short_name = excluded.short_name,
  title = excluded.title, short_bio = excluded.short_bio, hero_quote = excluded.hero_quote,
  primary_color = excluded.primary_color, secondary_color = excluded.secondary_color,
  status = excluded.status, nationality = excluded.nationality, era = excluded.era,
  theme = excluded.theme, hero = excluded.hero, stats = excluded.stats,
  legacy = excluded.legacy, sport_dna = excluded.sport_dna,
  discovery = excluded.discovery, passport_template = excluded.passport_template;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Dell Curry’s son', 'dell',
  'Curry grows up around NBA gyms, close enough to see greatness but still doubted by the machine.', '1988–2006', 'origin',
  '["The family gives access and discipline.","The body type creates skepticism.","Shooting becomes inheritance and personal language."]'::jsonb, 0
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Davidson: the small-school explosion', 'davidson',
  'Davidson turns Curry from overlooked prospect into national problem.', '2006–2009', 'rise',
  '["The tournament run rewrites his visibility.","Range becomes spectacle.","The question remains: can this translate to the NBA?"]'::jsonb, 1
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Draft and ankles', 'draft-ankles',
  'The early Warriors years are fragile. The revolution almost gets stopped by ankles before it starts.', '2009–2012', 'conflict',
  '["Injuries create uncertainty around his future.","The franchise has to decide whether to trust the body.","The setback becomes the hidden cost of the later explosion."]'::jsonb, 2
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Splash Brothers and Kerr', 'splash-kerr',
  'Klay Thompson, Draymond Green and Steve Kerr create the ecosystem where Curry’s shooting becomes a system.', '2014–2015', 'peak',
  '["Klay stretches the defense with him.","Draymond becomes the connector and emotional engine.","Kerr builds movement around shooting gravity."]'::jsonb, 3
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  '2015–16: the unanimous year', 'prime-2016',
  'Curry’s prime reaches absurdity: deep threes, 73 wins, unanimous MVP and a league suddenly learning new math.', '2015–2016', 'mythic',
  '["Shots that once looked irresponsible become strategic.","The 73–9 Warriors feel like basketball from the future.","The 3–1 Finals loss adds the scar that prevents the myth from becoming too clean."]'::jsonb, 4
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Durant and the superteam paradox', 'kd-era',
  'Kevin Durant joins and the Warriors become overwhelming, but the conversation around Curry becomes more complicated.', '2016–2019', 'peak',
  '["The team reaches terrifying efficiency.","Curry sacrifices clean individual authorship for collective dominance.","The dynasty wins, but the public argument changes."]'::jsonb, 5
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  '2022: the answer', 'comeback-2022',
  'The 2022 championship restores Curry as the clear author of a title run.', '2022', 'legacy',
  '["Boston becomes the last doubt.","Finals MVP completes the missing line in the résumé.","Night Night becomes an era-wide celebration."]'::jsonb, 6
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'The shooter nobody can escape', 'shooting-duel-paris',
  'A public shooting duel with an elite women’s shooter reinforces Curry as the reference point of pure shooting, before Paris gives him a global closing sequence.', '2024', 'legacy',
  '["The duel turns shooting supremacy into entertainment and proof.","Paris puts Curry beside LeBron in a late-era bridge.","Against Serbia and France, the range becomes national rescue."]'::jsonb, 7
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Davidson run', 'davidson-run', 'Small school, national attention, impossible range.',
  'The revolution announces itself before the NBA.',
  null,
  2008, 0
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'stephen-curry'),
  'First MVP', 'first-mvp', 'The Warriors win and the league begins to move.',
  'The system is now validated.',
  null,
  2015, 1
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Unanimous MVP', 'unanimous-mvp', '73 wins and offensive absurdity.',
  'The regular season becomes historic proof.',
  null,
  2016, 2
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Night Night', 'night-night', 'Curry closes games and a debate.',
  'The celebration becomes shorthand for finality.',
  null,
  2022, 3
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Shooting duel', 'shooting-duel', 'Curry faces an elite women’s shooter in a public contest.',
  'His identity as the reference shooter becomes cultural.',
  null,
  2024, 4
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Olympic final daggers', 'olympic-final-daggers', 'Late threes on the biggest international stage.',
  'The greatest shooter exports the myth to Paris.',
  null,
  2024, 5
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legends (
  sport_id, name, short_name, slug, title, short_bio, hero_quote,
  primary_color, secondary_color, status, nationality, era,
  theme, hero, stats, legacy, sport_dna, discovery, passport_template
) values (
  (select id from public.sports where slug = 'football'),
  'Cristiano Ronaldo', 'Ronaldo', 'cristiano-ronaldo',
  'THE IMPOSSIBLE STANDARD', 'Every environment asked Cristiano Ronaldo to become a different footballer. Madeira made him hungry. Manchester made him dangerous. Madrid made him inevitable. Portugal made him eternal. Juventus proved the body could age while the standard refused to.', 'Every environment asked Cristiano Ronaldo to become a different footballer. Madeira made him hungry. Manchester made him dangerous. Madrid made him inevitable. Portugal made him eternal. Juventus proved the body could age while the standard refused to.',
  '#d71935', '#f4d36a', 'published',
  'Portugal', '2002–present', '{"accent":"#d71935","secondary":"#f4d36a","glow":"rgba(215,25,53,.32)","visual":"reconstruction"}'::jsonb, '{"title":"THE IMPOSSIBLE STANDARD","subtitle":"How reinvention became a career strategy","archetype":"The Reinventor","thesis":"Every environment asked Cristiano Ronaldo to become a different footballer. Madeira made him hungry. Manchester made him dangerous. Madrid made him inevitable. Portugal made him eternal. Juventus proved the body could age while the standard refused to.","tags":["reinvention","obsession","longevity","pressure"]}'::jsonb,
  '[{"value":"5","label":"Ballon d''Or"},{"value":"900+","label":"senior goals"},{"value":"3","label":"major leagues dominated"},{"value":"Portugal","label":"national myth"}]'::jsonb, '[{"from":"Cristiano Ronaldo","to":"Kylian Mbappé","link":"The model of global ambition, body discipline and superstar self-construction."},{"from":"Cristiano Ronaldo","to":"Haaland & Vinícius","link":"The next generation inherits the expectation that greatness must travel across competitions and eras."}]'::jsonb, '{"sport":"football","primary":["reinvention","verticality","finishing","longevity"],"style":"Football here is told as adaptation: winger, scorer, leader, global institution.","code":"Reinvention under pressure"}'::jsonb,
  '[{"slug":"michael-jordan","title":"Michael Jordan — THE STANDARD","reason":"Because both careers turn winning into a personal language."},{"slug":"kobe-bryant","title":"Kobe Bryant — THE OBSESSION","reason":"Because Kobe inherited the obsession model and turned it into Mamba Mentality."},{"slug":"lebron-james","title":"LeBron James — THE CHOSEN ONE","reason":"Because longevity and expectation define both myths."}]'::jsonb, '{"legendId":"cristiano-ronaldo","chapters":11,"moments":8,"relationships":8,"sportsUnlocked":["football"],"completionHint":"You unlocked the Reinvention path."}'::jsonb
) on conflict (slug) do update set
  sport_id = excluded.sport_id, name = excluded.name, short_name = excluded.short_name,
  title = excluded.title, short_bio = excluded.short_bio, hero_quote = excluded.hero_quote,
  primary_color = excluded.primary_color, secondary_color = excluded.secondary_color,
  status = excluded.status, nationality = excluded.nationality, era = excluded.era,
  theme = excluded.theme, hero = excluded.hero, stats = excluded.stats,
  legacy = excluded.legacy, sport_dna = excluded.sport_dna,
  discovery = excluded.discovery, passport_template = excluded.passport_template;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Madeira: the island before the empire', 'madeira',
  'The story begins far from the football capitals, with a boy whose ambition was bigger than the island around him.', '1985–1997', 'origin',
  '["Family, sacrifice and separation built the emotional base.","The hunger was not cosmetic; it was survival energy.","GOAT Careers treats Madeira as the first rival: distance, doubt and limitation."]'::jsonb, 0
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Sporting: the first acceleration', 'sporting',
  'At Sporting, the raw winger begins to turn street instinct into professional danger.', '1997–2003', 'rise',
  '["The talent becomes visible to Portugal.","The body is still thin, but the personality is already loud.","The Manchester friendly becomes the door to a different life."]'::jsonb, 1
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Ferguson: the father of the monster', 'ferguson',
  'Sir Alex Ferguson does not just sign a winger. He gives structure to a force that still does not know its final shape.', '2003', 'rise',
  '["Ferguson protects him, challenges him and gives him the No. 7 shirt.","The relationship becomes mentorship, discipline and emotional shelter.","Manchester becomes the laboratory of the first reinvention."]'::jsonb, 2
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Manchester United: from theatre to weapon', 'manchester-first-phase',
  'This chapter tracks the whole transformation: first match, first free-kick goal, the Arsenal duel against Thierry Henry’s era, repeated battles with Ashley Cole, then the ban that triggered obsessive special training and led to the 2008 Ballon d’Or.', '2003–2008', 'peak',
  '["The first matches are electricity before efficiency.","The free kick announces that the technique is becoming a signature.","Ashley Cole becomes a personal exam: speed alone is no longer enough.","The suspension period becomes a private training arc.","By 2008, the winger is no longer a prospect; he is the best player in the world."]'::jsonb, 3
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Ballon d''Or: the first crown', 'ballon-2008',
  'The first Ballon d’Or confirms that the experiment has worked: Cristiano has converted flair into end product.', '2008', 'peak',
  '["Goals, trophies and individual control converge.","Manchester United becomes the stage where his global myth begins.","The standard changes: now he must defend being the best."]'::jsonb, 4
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Real Madrid: the pressure machine', 'real-madrid',
  'Madrid transforms him again. He becomes less ornamental, more direct, more numerical, more inevitable.', '2009–2014', 'reinvention',
  '["The Bernabéu demands history, not promise.","Mourinho, Özil, Di María and later Ancelotti sharpen the machine.","The rivalry with Messi becomes the measurement system of modern football."]'::jsonb, 5
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Décima and BBC: the imperial phase', 'decima-bbc',
  'La Décima gives the story its European crown. The BBC era turns Madrid into a Champions League dynasty.', '2014–2018', 'mythic',
  '["Benzema becomes the connector; Bale becomes the vertical weapon.","Marcelo gives friendship, rhythm and attacking freedom.","The bicycle kick against Buffon becomes a moment where even rival fans applaud the impossible."]'::jsonb, 6
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Portugal: the country becomes the scene', 'portugal',
  'With Portugal, Ronaldo’s story moves beyond club domination and becomes national memory.', '2004–2019', 'legacy',
  '["Early heartbreak makes the eventual triumph heavier.","Euro 2016 turns injury into leadership from the sideline.","The national team chapter proves his myth does not depend on one club."]'::jsonb, 7
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Juventus: domination after 33', 'juventus',
  'The Juventus era is not a decline chapter. It is the proof that a player aged 33 to 36 could still dominate a new league, collect awards, break records and redefine longevity.', '2018–2021', 'reinvention',
  '["Serie A MVP, AIC Footballer of the Year, Best Forward, Capocannoniere and repeated Juventus MVP honors.","101 official Juventus goals, 81 Serie A goals, 133 appearances and five team trophies.","The Atlético Madrid Champions League hat-trick becomes the signature European scene.","The Camp Nou double against Barcelona shows he could still own hostile stages.","Records include top-scorer honors in England, Spain and Italy, and 100+ league goals in three major European leagues.","The transfer also becomes a commercial event, including a major shirt-sales story around his arrival."]'::jsonb, 8
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Return to Manchester: memory meets reality', 'return-manchester',
  'The return is emotional but complicated: a legend walks back into the place that made him, but the institution is no longer the same machine.', '2021–2022', 'conflict',
  '["The first months bring goals and nostalgia.","The team context exposes the gap between memory and present reality.","This chapter is written as collision: myth, age, pressure and institutional instability."]'::jsonb, 9
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.chapters (legend_id, title, slug, summary, period, tone, beats, sort_order)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Saudi Arabia and the afterlife of influence', 'saudi-legacy',
  'The Saudi chapter extends his influence beyond Europe and opens a new commercial and sporting frontier.', '2023–present', 'legacy',
  '["The move changes the visibility of a league.","The body keeps competing while the story shifts from peak domination to global influence.","His legacy now reaches Mbappé, Haaland and Vinícius: the next generation of ambition."]'::jsonb, 10
) on conflict (legend_id, slug) do update set
  title = excluded.title, summary = excluded.summary, period = excluded.period,
  tone = excluded.tone, beats = excluded.beats, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'First Ballon d''Or', 'first-ballon-d-or', 'The United years produce the first world crown.',
  'It validates the transformation from entertainer to finisher.',
  null,
  2008, 0
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Calma', 'calma', 'A celebration inside hostile pressure.',
  'It turns silence into domination.',
  null,
  2012, 1
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'La Décima', 'la-decima', 'Madrid reaches the tenth European Cup.',
  'It connects Ronaldo to the institution’s deepest obsession.',
  null,
  2014, 2
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Euro 2016', 'euro-2016', 'Portugal wins after Ronaldo leaves injured and leads from the sideline.',
  'It reframes leadership beyond playing minutes.',
  null,
  2016, 3
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Bicycle kick vs Buffon', 'bicycle-kick-vs-buffon', 'A Champions League knockout goal that made Juventus fans applaud.',
  'It is athletic imagination turned into history.',
  null,
  2018, 4
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Hat-trick vs Atlético Madrid', 'hat-trick-vs-atletico-madrid', 'Juventus needs a comeback; Ronaldo provides all three goals.',
  'It is the Juventus-era proof of Champions League gravity.',
  null,
  2019, 5
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Hat-trick vs Spain', 'hat-trick-vs-spain', 'World Cup stage, late free kick, national burden.',
  'A reminder that pressure often made him more precise.',
  null,
  2018, 6
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;

insert into public.legendary_moments (
  legend_id, title, slug, context, why_it_matters, happened_at, year, sort_order
) values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Messi missed, Ronaldo didn''t', 'messi-missed-ronaldo-didn-t', 'A contrast moment in the public rivalry narrative.',
  'For fans, it symbolizes the cruelty and drama of comparison culture.',
  null,
  null, 7
) on conflict (legend_id, slug) do update set
  title = excluded.title, context = excluded.context,
  why_it_matters = excluded.why_it_matters, happened_at = excluded.happened_at,
  year = excluded.year, sort_order = excluded.sort_order;
delete from public.timeline_events where legend_id in (select id from public.legends where slug in ('michael-jordan', 'kobe-bryant', 'lebron-james', 'stephen-curry', 'cristiano-ronaldo'));

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'UNC title shot', 'The first famous pressure moment.',
  1982, '1984–2003'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'NBA and Nike', 'A player and a business myth start together.',
  1984, '1984–2003'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'First championship', 'The Pistons wall finally falls.',
  1991, '1984–2003'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  '72–10', 'The comeback turns into a historic team season.',
  1996, '1984–2003'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'michael-jordan'),
  'Last Shot', 'The cleanest closing image of a dynasty.',
  1998, '1984–2003'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Draft to Lakers', 'The teenage experiment begins.',
  1996, '1996–2016'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'First title', 'Kobe and Shaq start a dynasty.',
  2000, '1996–2016'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  '81 points', 'The obsession becomes statistical violence.',
  2006, '1996–2016'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Beijing', 'Kobe helps reset Team USA intensity.',
  2008, '1996–2016'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'kobe-bryant'),
  'Final 60', 'The last performance becomes a goodbye ritual.',
  2016, '1996–2016'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'The Chosen One arrives', 'LeBron enters the NBA with unprecedented expectation.',
  2003, '2003–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'Dallas collapse', 'Failure forces the Miami evolution.',
  2011, '2003–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'Peak control', 'LeBron’s two-way dominance reaches an individual summit.',
  2013, '2003–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'The Block and 3–1', 'Cleveland receives its defining sports image.',
  2016, '2003–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'lebron-james'),
  'Paris', 'A late-era bridge with Curry and Durant.',
  2024, '2003–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Drafted by Warriors', 'The undersized shooter enters the league.',
  2009, '2009–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'First MVP and title', 'The Warriors become the new basketball language.',
  2015, '2009–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Unanimous MVP', 'The regular season becomes a geometry experiment.',
  2016, '2009–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Fourth title', 'Curry answers the authorship argument.',
  2022, '2009–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'stephen-curry'),
  'Paris eruption', 'The shot travels to the Olympic stage.',
  2024, '2009–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'The Manchester door opens', 'Sporting to United: the raw winger enters Ferguson’s system.',
  2003, '2002–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'First Ballon d’Or', 'The Manchester transformation reaches world-best status.',
  2008, '2002–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'La Décima', 'Madrid and Ronaldo complete the European obsession.',
  2014, '2002–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Portugal wins Europe', 'Injury removes him from the field but not from the story.',
  2016, '2002–present'
);

insert into public.timeline_events (legend_id, title, description, event_year, era)
values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'Juventus reinvention', 'A third major league becomes the next test of universality.',
  2018, '2002–present'
);

insert into public.relationships (
  source_legend_id, target_legend_id, relationship_type, title, description, strength
) values (
  (select id from public.legends where slug = 'michael-jordan'),
  (select id from public.legends where slug = 'kobe-bryant'),
  'legacy', 'The Standard → The Obsession', 'Kobe studied Jordan as a blueprint for competitive immortality.', 5
) on conflict (source_legend_id, target_legend_id, relationship_type) do update set
  title = excluded.title, description = excluded.description, strength = excluded.strength;

insert into public.relationships (
  source_legend_id, target_legend_id, relationship_type, title, description, strength
) values (
  (select id from public.legends where slug = 'kobe-bryant'),
  (select id from public.legends where slug = 'lebron-james'),
  'influence', 'Mamba bridge', 'LeBron inherited part of the emotional NBA stage Kobe helped define.', 4
) on conflict (source_legend_id, target_legend_id, relationship_type) do update set
  title = excluded.title, description = excluded.description, strength = excluded.strength;

insert into public.relationships (
  source_legend_id, target_legend_id, relationship_type, title, description, strength
) values (
  (select id from public.legends where slug = 'lebron-james'),
  (select id from public.legends where slug = 'stephen-curry'),
  'rivalry', 'Power vs Geometry', 'Their Finals rivalry shifted the league from physical control to spacing revolution.', 5
) on conflict (source_legend_id, target_legend_id, relationship_type) do update set
  title = excluded.title, description = excluded.description, strength = excluded.strength;

insert into public.relationships (
  source_legend_id, target_legend_id, relationship_type, title, description, strength
) values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  (select id from public.legends where slug = 'michael-jordan'),
  'shared-dna', 'Impossible standards', 'Both turned obsession, brand and pressure into a global language of greatness.', 5
) on conflict (source_legend_id, target_legend_id, relationship_type) do update set
  title = excluded.title, description = excluded.description, strength = excluded.strength;

insert into public.relationships (
  source_legend_id, target_legend_id, relationship_type, title, description, strength
) values (
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  (select id from public.legends where slug = 'kobe-bryant'),
  'shared-dna', 'Work as identity', 'Both made discipline feel like a personality rather than a habit.', 5
) on conflict (source_legend_id, target_legend_id, relationship_type) do update set
  title = excluded.title, description = excluded.description, strength = excluded.strength;

insert into public.relationships (
  source_legend_id, target_legend_id, relationship_type, title, description, strength
) values (
  (select id from public.legends where slug = 'michael-jordan'),
  (select id from public.legends where slug = 'lebron-james'),
  'rivalry', 'The measurement debate', 'LeBron’s career is permanently read against the standard Jordan created.', 5
) on conflict (source_legend_id, target_legend_id, relationship_type) do update set
  title = excluded.title, description = excluded.description, strength = excluded.strength;

insert into public.relationships (
  source_legend_id, target_legend_id, relationship_type, title, description, strength
) values (
  (select id from public.legends where slug = 'stephen-curry'),
  (select id from public.legends where slug = 'cristiano-ronaldo'),
  'same-era', 'Late-era global icons', 'Both carried old assumptions into a new era of global sports media.', 3
) on conflict (source_legend_id, target_legend_id, relationship_type) do update set
  title = excluded.title, description = excluded.description, strength = excluded.strength;
