import DesktopAbout from "./about/DesktopAbout";
import MobileAbout from "./about/MobileAbout";

const About = () => {
  return (
    <div id="about" className="relative flex flex-col items-center bg">
      <MobileAbout />
      <DesktopAbout />
    </div>
  );
};

export default About;
