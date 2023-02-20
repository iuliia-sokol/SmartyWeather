import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../pages/SharedLayout/SharedLayout';

const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const HistoryPage = lazy(() => import('../pages/HistoryPage/HistoryPage'));
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
};
