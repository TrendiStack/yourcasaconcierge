import { HashLink as Link } from 'react-router-hash-link';
const LinkItem = ({ to, text, black }) => {
  return (
    <Link
      to={`/#${to}`}
      className={`link-item ${black ? 'after:bg-black' : 'after:bg-white'}`}
    >
      {text}
    </Link>
  );
};

export default LinkItem;
