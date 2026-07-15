export interface Athlete {
  slug: string;
  name: string;
  signature: string;
  years: number;
  quote: string;
  facts: { title: string; body: string }[];
  impacts: { title: string; body: string }[];
  stats: { value: string; label: string }[];
}
