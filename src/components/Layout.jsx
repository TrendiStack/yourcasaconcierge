import { About, Services, Pricing, Brands, Contact, Footer } from './Sections';
const Layout = () => {
  return (
    <div className="overflow-hidden">
      <About />
      <Services />
      <Pricing />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
