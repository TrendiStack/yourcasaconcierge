import MobileFooter from '../footer/MobileFooter';
import DesktopFooter from '../footer/DesktopFooter';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center">
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
};

export default Footer;
