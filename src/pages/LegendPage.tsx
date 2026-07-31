import { Navigate, useParams } from 'react-router-dom';
import { LegendExperience } from '../components/mythic';
import { useLegendBySlug } from '../features/legends/hooks/useLegendBySlug';

export function LegendPage() {
  const { slug = '' } = useParams();
  const { data: legend, isLoading, error } = useLegendBySlug(slug);
  if (isLoading) return <p>Loading legend…</p>;
  if (error) return <p role="alert">Unable to load this legend: {error.message}</p>;
  if (!legend) return <Navigate to="/" replace />;
  return <LegendExperience legend={legend} />;
}
