import { Route, Routes } from "react-router-dom";
import { Nav, Hero, Layout } from "./components";
import FormSent from "./components/contact/FormSent";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
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
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
