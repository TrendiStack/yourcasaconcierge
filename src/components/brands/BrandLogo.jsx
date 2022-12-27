import { useContext } from 'react';
import { SanityContext } from '../../context/SanityContext';
import { urlFor } from '../../lib/client';

const BrandLogo = ({ logo, borderRight, borderBottom }) => {
  const { partners } = useContext(SanityContext);
  const logoFilter = partners.filter(partner => partner.title === logo);

  return (
    <div
      className={`flex items-center justify-center h-40 xl:h-52 w-full 
      ${borderBottom ? 'border-b' : ''}
      ${borderRight && 'border-r'} border-black`}
    >
      {partners[0] && (
        <img
          src={urlFor(logoFilter[0].image).url()}
          alt="Partner Logo"
          className="w-24 md:w-36 xl:w-auto"
        />
      )}
    </div>
  );
};

export default BrandLogo;
