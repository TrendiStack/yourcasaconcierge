const Service = ({ num, title, desc }) => {
  return (
    <li className="flex flex-col">
      <p className="garamond text-3xl text-color">0{num}</p>
      <h2 className="font-semibold text-3xl text-[#161616]">{title}</h2>
      <p className="font-medium">{desc}</p>
    </li>
  );
};

export default Service;
