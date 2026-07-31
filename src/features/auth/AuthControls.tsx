import { useState, type FormEvent } from 'react';
import { isSupabaseConfigured } from '../../lib/supabase/supabaseClient';
import { Button } from '../../components/ui/Button';
import { Menu } from '../../components/ui/Menu';
import { useSession } from './hooks/useSession';

export function AuthControls() {
  const { user, signIn, signOut } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isSupabaseConfigured) return null;
  if (user) return <Button size="sm" onClick={() => void signOut()}>Sign out</Button>;

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError('');
    try {
      await signIn(email, password);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Sign in failed');
    }
  }

  return (
    <Menu label="Sign in">
      <form className="grid gap-2 p-2" onSubmit={submit}>
        <label className="text-xs text-goat-text2" htmlFor="auth-email">Email</label>
        <input id="auth-email" className="rounded-lg border border-goat-line bg-black/30 px-3 py-2 text-sm" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <label className="text-xs text-goat-text2" htmlFor="auth-password">Password</label>
        <input id="auth-password" className="rounded-lg border border-goat-line bg-black/30 px-3 py-2 text-sm" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required minLength={6} />
        {error && <p role="alert" className="text-xs text-red-300">{error}</p>}
        <Button type="submit" size="sm" variant="primary">Sign in</Button>
      </form>
    </Menu>
  );
}

