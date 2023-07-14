import { useContext } from 'react';
import { SanityContext } from '../../context/SanityContext';
import MailChimpForm from '../contact/MailChimpForm';
import { urlFor } from '../../lib/client';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import LargeLogo from '../LargeLogo';

const MobileFooter = () => {
  const { navigation: nav, footer: foot } = useContext(SanityContext);
  const footer = foot[0] === undefined ? null : foot[0];
  return (
    <div className="container xl:hidden layout-padding py-10">
      {/* {footer?.logo && (
        <img
          className="w-[200px] logo bg-black"
          src={urlFor(footer.logo).url()}
          loading="lazy"
          alt="Your Casa Concierge Logo"
        />
      )} */}
      <LargeLogo bg="bg-light" />

      <div className="flex justify-between my-4">
        <ul className="flex flex-col gap-2">
          {nav
            ?.filter(item => item.id < 4)
            .map(item => (
              <li key={item.id}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
        </ul>
        <ul className="flex flex-col gap-2">
          {nav
            ?.filter(item => item.id > 3 && item.id < 7)
            .map(item => (
              <li key={item.id}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Contact:</p>
        <p>{footer?.email}</p>
      </div>
      <div className="flex justify-between my-2">
        <div className="flex items-center gap-2">
          <div className="w-[27px] h-[3.03px] bg-dark"></div>
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
      <p className="text-center pt-8">{`© ${
        new Date().getFullYear() - 1
      } YourCasaConcierge. All rights reserved.`}</p>
    </div>
  );
};

export default MobileFooter;
