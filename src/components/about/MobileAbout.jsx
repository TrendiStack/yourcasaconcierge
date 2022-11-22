import content from "../../content";
import livingRoomDark from "../../assets/images/content/living-room-dark.jpg";

const MobileAbout = () => {
  const { about } = content;
  return (
    <div className="container xl:hidden flex flex-col justify-center pb-10 px-8 gap-5">
      <div>
        <h1 className="header-text">{about.title}</h1>
        <img src={livingRoomDark} alt="living room" />
      </div>
      <p className="text-lg w-full leading-normal">{about.description}</p>
    </div>
  );
};

export default MobileAbout;
