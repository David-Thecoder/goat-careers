import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/mythic/Layout';

const HomePage = lazy(() => import('../pages/HomePage').then((module) => ({ default: module.HomePage })));
const LegendPage = lazy(() => import('../pages/LegendPage').then((module) => ({ default: module.LegendPage })));
const UniversePage = lazy(() => import('../pages/UniversePage').then((module) => ({ default: module.UniversePage })));

export default function App() {
  return (
    <BrowserRouter basename="/goat-careers">
      <Suspense fallback={<p>Loading experience…</p>}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="universe" element={<UniversePage />} />
            <Route path="timeline" element={<UniversePage />} />
            <Route path="legends/:slug" element={<LegendPage />} />
            <Route path="athletes/:slug" element={<LegendPage />} />
            <Route path=":slug" element={<LegendPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
