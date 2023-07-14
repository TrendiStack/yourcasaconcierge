import { Nav, Hero, Layout } from './components/Sections';
import { Route, Routes } from 'react-router-dom';
import ClientLoader from './components/coming-soon/ClientLoader';
import ComingSoon from './components/ComingSoon';
import FormSent from './components/contact/FormSent';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ClientLoader>
              <Nav />
            </ClientLoader>
          }
        >
          <Route
            index
            element={
              <>
                <Hero />
                <Layout />
              </>
            }
          />
          <Route path="/success" element={<FormSent />} />
        </Route>
        <Route
          path="/coming-soon"
          element={
            <ClientLoader>
              <ComingSoon />
            </ClientLoader>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
