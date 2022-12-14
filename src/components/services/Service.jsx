const Service = ({ num, title, desc, setService }) => {
  return (
    <li
      // onClick={() => setService(num)}
      className="flex flex-col gap-1"
    >
      <p className="garamond text-2xl lg:text-xl">0{num}</p>
      <h2 className="text-2xl font-extrabold lg:text-xl 2xl:text-3xl">
        {title}
      </h2>
      <p className="text-base font-light lg:text-sm 2xl:text-lg">{desc}</p>
    </li>
  );
};

export default Service;
