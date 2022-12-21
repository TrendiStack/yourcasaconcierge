const Service = ({ num, title, desc }) => {
  return (
    <li className="bg-light p-5 ">
      <p className="garamond text-2xl lg:text-3xl text-light">
        <span className="lg:text-2xl">0</span>
        {num}
      </p>
      <h2 className="lg:text-xl border-t-2 border-primary pt-3 mt-3 mb-2 font-semibold text-tertiary">
        {title}
      </h2>
      <p className="text-base lg:text-lg">{desc}</p>
    </li>
  );
};

export default Service;
