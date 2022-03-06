import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import BasicLayout from '@/layouts';
import Welcome from '../pages/welcome';

import NotFound from '../pages/404';
const DemoForm = lazy(() => import('../pages/demo/form'));
const DemoTable = lazy(() => import('../pages/demo/table'));
const Login = lazy(() => import('../pages/login'));

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Welcome />} />
        <Route path="demo/form" element={<DemoForm />} />
        <Route path="demo/table" element={<DemoTable />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};
export default PageRoutes;
