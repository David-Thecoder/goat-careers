insert into public.sports (name, slug)
values ('Football', 'football'), ('Basketball', 'basketball')
on conflict (slug) do nothing;

-- ponytail: import the existing editorial modules only after content review;
-- placeholder rows would expose incomplete legend pages as published content.

