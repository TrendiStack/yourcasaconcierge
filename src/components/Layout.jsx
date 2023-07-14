import {
  About,
  PropertyManagement,
  Pricing,
  Properties,
  Brands,
  Contact,
  Footer,
} from './Sections';

const Layout = () => {
  return (
    <div className="overflow-hidden text-black flex flex-col gap-20 lg:gap-40">
      <About />
      <PropertyManagement />
      <Pricing />
      <Properties />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
