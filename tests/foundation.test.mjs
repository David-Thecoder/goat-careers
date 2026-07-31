import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const migration = readFileSync(new URL('../supabase/migrations/202607310001_backend_foundation.sql', import.meta.url), 'utf8');

test('all user-owned tables enable RLS', () => {
  for (const table of ['user_profiles', 'user_passports', 'user_progress', 'user_favorites']) {
    assert.match(migration, new RegExp(`alter table public\\.${table} enable row level security`, 'i'));
  }
});

test('frontend service-role keys are never documented', () => {
  const env = readFileSync(new URL('../.env.example', import.meta.url), 'utf8');
  assert.doesNotMatch(env, /service.role/i);
});

