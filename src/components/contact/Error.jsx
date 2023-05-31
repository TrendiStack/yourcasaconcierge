const Error = ({ error, className }) => {
  return <p className={`${className} text-red-800 text-base`}>{error}</p>;
};

export default Error;
