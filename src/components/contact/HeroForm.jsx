const HeroForm = () => {
  return (
    <form className="hidden absolute bottom-0 xl:flex justify-center border-y border-white w-full z-30">
      <input
        type="text"
        placeholder="First Name"
        className="border-r border-white py-5 bg-transparent placeholder:text-white"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="border-r border-white pl-5 py-5 bg-transparent placeholder:text-white"
      />
      <input
        type="email"
        placeholder="Email"
        className="border-r border-white pl-5 py-5 bg-transparent placeholder:text-white"
      />
      <input
        type="text"
        placeholder="Phone"
        className="border-r border-white pl-5 py-5 bg-transparent placeholder:text-white"
      />
      <button className="py-5 bg-transparent ml-36 placeholder:text-white ">
        Send Request
      </button>
    </form>
  );
};

export default HeroForm;
