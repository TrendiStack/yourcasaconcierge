import content from "../../content";
import ycclogoblack from "../../assets/images/ycclogoblack.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const MobileFooter = () => {
  const { footer } = content;
  const { nav } = content;

  console.log(nav.filter((item) => item.id < 4));
  return (
    <div className="container xl:hidden py-10 px-8">
      <img className="w-[200px] logo" src={ycclogoblack} alt="logo" />

      <ul className="flex justify-between my-5">
        <div className="flex flex-col gap-2">
          {nav
            .filter((item) => item.id < 5 && item.id !== 1)
            .map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
        </div>
        <div className="flex flex-col gap-2">
          {nav
            .filter((item) => item.id > 4 && item.id < 7)
            .map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
        </div>
      </ul>
      <div className="my-4">
        <p className="font-semibold">Address:</p>
        <p>{footer.address}</p>
      </div>
      <div className="my-4">
        <p className="font-semibold">Contact:</p>
        <p>
          {footer.phone}
          <br /> {footer.email}
        </p>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-2 ml-2">
          <div className="w-[27px] h-[3.03px] bg-[#DAD7CD]"></div>
          <p>Follow us</p>
        </div>
        <div className="flex gap-2">
          <FaFacebookF className="text-xl" />
          <FaTwitter className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaLinkedin className="text-xl" />
        </div>
      </div>
      <p className="text-center pt-8 font-light">{footer.copyRight}</p>
    </div>
  );
};

export default MobileFooter;
