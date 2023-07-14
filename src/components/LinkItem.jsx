import { HashLink as Link } from 'react-router-hash-link';
const LinkItem = ({ to, text, bg }) => {
  return (
    <Link
      to={`/#${to}`}
      className={`link-item
    ${bg === 'bg-light' ? 'after:bg-dark' : 'after:bg-light'}
    `}
    >
      {text}
    </Link>
  );
};

export default LinkItem;
