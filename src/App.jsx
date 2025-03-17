import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './components/Loader/Loader';
// import SvgSprite from './components/SvgSprite/SvgSprite';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Layout from './components/Layout';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const TeachersPage = lazy(() =>
  import('../src/pages/TeachersPage/TeachersPage')
);

export default function App() {
  return (
    <>
      <Layout>
        {/* <SvgSprite /> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
