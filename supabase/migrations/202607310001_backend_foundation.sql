create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table public.sports (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.legends (
  id uuid primary key default gen_random_uuid(),
  sport_id uuid references public.sports(id) on delete set null,
  name text not null,
  short_name text not null,
  slug text not null unique,
  title text,
  short_bio text,
  hero_quote text,
  cover_image_url text,
  portrait_image_url text,
  primary_color text,
  secondary_color text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  birth_date date,
  nationality text,
  era text,
  theme jsonb not null default '{}'::jsonb,
  hero jsonb not null default '{}'::jsonb,
  stats jsonb not null default '[]'::jsonb,
  legacy jsonb not null default '[]'::jsonb,
  sport_dna jsonb not null default '{}'::jsonb,
  discovery jsonb not null default '[]'::jsonb,
  passport_template jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.chapters (
  id uuid primary key default gen_random_uuid(),
  legend_id uuid not null references public.legends(id) on delete cascade,
  title text not null,
  slug text not null,
  summary text,
  body text,
  period text,
  tone text,
  beats jsonb not null default '[]'::jsonb,
  era_start int,
  era_end int,
  sort_order int not null default 0,
  cover_image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (legend_id, slug)
);

create table public.legendary_moments (
  id uuid primary key default gen_random_uuid(),
  legend_id uuid not null references public.legends(id) on delete cascade,
  chapter_id uuid references public.chapters(id) on delete set null,
  title text not null,
  slug text not null,
  description text,
  context text,
  why_it_matters text,
  happened_at date,
  year int,
  media_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (legend_id, slug)
);

create table public.relationships (
  id uuid primary key default gen_random_uuid(),
  source_legend_id uuid not null references public.legends(id) on delete cascade,
  target_legend_id uuid not null references public.legends(id) on delete cascade,
  relationship_type text not null,
  title text not null,
  description text,
  strength int not null default 1 check (strength between 1 and 5),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (source_legend_id <> target_legend_id),
  unique (source_legend_id, target_legend_id, relationship_type)
);

create table public.timeline_events (
  id uuid primary key default gen_random_uuid(),
  legend_id uuid references public.legends(id) on delete cascade,
  title text not null,
  description text,
  event_year int not null check (event_year between 1800 and 2200),
  event_date date,
  event_type text,
  importance int not null default 1 check (importance between 1 and 5),
  image_url text,
  era text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.achievements (
  id uuid primary key default gen_random_uuid(),
  legend_id uuid not null references public.legends(id) on delete cascade,
  title text not null,
  category text,
  year int,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.quotes (
  id uuid primary key default gen_random_uuid(),
  legend_id uuid references public.legends(id) on delete cascade,
  quote text not null,
  speaker text,
  context text,
  source_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.sources (
  id uuid primary key default gen_random_uuid(),
  legend_id uuid references public.legends(id) on delete cascade,
  title text not null,
  url text,
  source_type text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.user_passports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  legends_discovered int not null default 0 check (legends_discovered >= 0),
  moments_viewed int not null default 0 check (moments_viewed >= 0),
  relationships_explored int not null default 0 check (relationships_explored >= 0),
  sports_unlocked int not null default 0 check (sports_unlocked >= 0),
  last_active_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  legend_id uuid references public.legends(id) on delete cascade,
  chapter_id uuid references public.chapters(id) on delete cascade,
  moment_id uuid references public.legendary_moments(id) on delete cascade,
  progress_type text not null,
  completed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint user_progress_target_required check (num_nonnulls(legend_id, chapter_id, moment_id) = 1),
  unique nulls not distinct (user_id, legend_id, chapter_id, moment_id, progress_type)
);

create table public.user_favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  legend_id uuid references public.legends(id) on delete cascade,
  moment_id uuid references public.legendary_moments(id) on delete cascade,
  created_at timestamptz not null default now(),
  constraint user_favorites_target_required check (num_nonnulls(legend_id, moment_id) = 1),
  unique nulls not distinct (user_id, legend_id, moment_id)
);

create index idx_chapters_legend_sort on public.chapters(legend_id, sort_order);
create index idx_moments_legend_sort on public.legendary_moments(legend_id, sort_order);
create index idx_timeline_year on public.timeline_events(event_year);
create index idx_timeline_legend_year on public.timeline_events(legend_id, event_year);
create index idx_relationship_source on public.relationships(source_legend_id);
create index idx_relationship_target on public.relationships(target_legend_id);
create index idx_user_progress_user on public.user_progress(user_id);
create index idx_user_favorites_user on public.user_favorites(user_id);

do $$
declare table_name text;
begin
  foreach table_name in array array['sports','legends','chapters','legendary_moments','relationships','timeline_events','achievements','quotes','sources','user_profiles','user_passports']
  loop
    execute format('create trigger set_%I_updated_at before update on public.%I for each row execute function public.set_updated_at()', table_name, table_name);
  end loop;
end $$;

alter table public.sports enable row level security;
alter table public.legends enable row level security;
alter table public.chapters enable row level security;
alter table public.legendary_moments enable row level security;
alter table public.relationships enable row level security;
alter table public.timeline_events enable row level security;
alter table public.achievements enable row level security;
alter table public.quotes enable row level security;
alter table public.sources enable row level security;
alter table public.user_profiles enable row level security;
alter table public.user_passports enable row level security;
alter table public.user_progress enable row level security;
alter table public.user_favorites enable row level security;

create policy "Public sports are readable" on public.sports for select to anon, authenticated using (true);
create policy "Published legends are readable" on public.legends for select to anon, authenticated using (status = 'published');
create policy "Published legend chapters are readable" on public.chapters for select to anon, authenticated using (exists (select 1 from public.legends where legends.id = chapters.legend_id and legends.status = 'published'));
create policy "Published legend moments are readable" on public.legendary_moments for select to anon, authenticated using (exists (select 1 from public.legends where legends.id = legendary_moments.legend_id and legends.status = 'published'));
create policy "Published relationships are readable" on public.relationships for select to anon, authenticated using (
  exists (select 1 from public.legends where legends.id = relationships.source_legend_id and legends.status = 'published')
  and exists (select 1 from public.legends where legends.id = relationships.target_legend_id and legends.status = 'published')
);
create policy "Published timeline is readable" on public.timeline_events for select to anon, authenticated using (legend_id is null or exists (select 1 from public.legends where legends.id = timeline_events.legend_id and legends.status = 'published'));
create policy "Published achievements are readable" on public.achievements for select to anon, authenticated using (exists (select 1 from public.legends where legends.id = achievements.legend_id and legends.status = 'published'));
create policy "Published quotes are readable" on public.quotes for select to anon, authenticated using (legend_id is null or exists (select 1 from public.legends where legends.id = quotes.legend_id and legends.status = 'published'));
create policy "Published sources are readable" on public.sources for select to anon, authenticated using (legend_id is null or exists (select 1 from public.legends where legends.id = sources.legend_id and legends.status = 'published'));

create policy "Users read own profile" on public.user_profiles for select to authenticated using ((select auth.uid()) = id);
create policy "Users insert own profile" on public.user_profiles for insert to authenticated with check ((select auth.uid()) = id);
create policy "Users update own profile" on public.user_profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "Users read own passport" on public.user_passports for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users insert own passport" on public.user_passports for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Users update own passport" on public.user_passports for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Users read own progress" on public.user_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users insert own progress" on public.user_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Users update own progress" on public.user_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Users delete own progress" on public.user_progress for delete to authenticated using ((select auth.uid()) = user_id);
create policy "Users read own favorites" on public.user_favorites for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users insert own favorites" on public.user_favorites for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Users delete own favorites" on public.user_favorites for delete to authenticated using ((select auth.uid()) = user_id);

grant select on public.sports, public.legends, public.chapters, public.legendary_moments, public.relationships, public.timeline_events, public.achievements, public.quotes, public.sources to anon, authenticated;
grant select, insert, update on public.user_profiles, public.user_passports to authenticated;
grant select, insert, update, delete on public.user_progress to authenticated;
grant select, insert, delete on public.user_favorites to authenticated;
grant execute on function public.set_updated_at() to service_role;

insert into storage.buckets (id, name, public)
values
  ('legends-images', 'legends-images', true),
  ('legend-covers', 'legend-covers', true),
  ('avatars', 'avatars', false),
  ('timeline-assets', 'timeline-assets', true),
  ('moment-media', 'moment-media', true)
on conflict (id) do nothing;

create policy "Public media is readable"
on storage.objects for select to anon, authenticated
using (bucket_id in ('legends-images', 'legend-covers', 'timeline-assets', 'moment-media'));

create policy "Users read own avatars"
on storage.objects for select to authenticated
using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);

create policy "Users upload own avatars"
on storage.objects for insert to authenticated
with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);

create policy "Users update own avatars"
on storage.objects for update to authenticated
using (bucket_id = 'avatars' and owner_id = (select auth.uid())::text)
with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);

create policy "Users delete own avatars"
on storage.objects for delete to authenticated
using (bucket_id = 'avatars' and owner_id = (select auth.uid())::text);

