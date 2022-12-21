import content from '../../content';
import ycclogo from '../../assets/images/ycclogo.svg';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import MailChimpForm from '../contact/MailChimpForm';

const MobileFooter = () => {
  const { footer } = content;
  const { nav } = content;
  return (
    <div className="container xl:hidden layout-padding py-10 text-light">
      <img
        className="w-[200px] logo"
        src={ycclogo}
        alt="Your Casa Concierge Logo"
      />
      <ul className="flex justify-between my-4">
        <div className="flex flex-col gap-2">
          {nav
            .filter(item => item.id < 4)
            .map(item => (
              <li key={item.id}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
        </div>
        <div className="flex flex-col gap-2">
          {nav
            .filter(item => item.id > 3 && item.id < 7)
            .map(item => (
              <li key={item.id}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
        </div>
      </ul>

      <div className="mb-4">
        <p className="font-semibold">Contact:</p>
        <p>{footer.email}</p>
      </div>
      <div className="flex justify-between my-2">
        <div className="flex items-center gap-2 ml-2">
          <div className="w-[27px] h-[3.03px] bg"></div>
          <p>Follow us</p>
        </div>
        <div className="flex gap-2">
          <FaFacebookF className="text-xl" />
          <FaTwitter className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaLinkedin className="text-xl" />
        </div>
      </div>
      <MailChimpForm footer mobile />
      <p className="text-center pt-8">{footer.copyRight}</p>
    </div>
  );
};

export default MobileFooter;
