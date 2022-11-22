import {
  airbnb,
  booking,
  expedia,
  homeaway,
  vrbo,
} from "../../assets/images/brands";

const BrandLogo = ({ logo, borderRight, borderBottom }) => {
  return (
    <div
      className={`flex items-center justify-center h-40 w-full 
      ${borderBottom ? "border-b" : ""}
      ${borderRight && "border-r"} border-black`}
    >
      <img
        src={
          logo === "airbnb"
            ? airbnb
            : logo === "booking"
            ? booking
            : logo === "expedia"
            ? expedia
            : logo === "homeaway"
            ? homeaway
            : vrbo
        }
        alt={logo}
        className="w-24 md:w-36 xl:w-auto"
      />
    </div>
  );
};

export default BrandLogo;
