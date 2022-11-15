import { useState } from "react";
import content from "../content";
import { livingRoomDark } from "../assets/images/content";
import {
  airbnb,
  booking,
  expedia,
  homeaway,
  vrbo,
} from "../assets/images/brands";
import Service from "./services/Service";

const Services = () => {
  const [service, setService] = useState("");
  const { services: data } = content;

  const imageHandler =
    service === 1
      ? airbnb
      : service === 2
      ? booking
      : service === 3
      ? expedia
      : service === 4
      ? homeaway
      : service === 5
      ? vrbo
      : livingRoomDark;

  return (
    <div id="services" className="bg-variant pb-36">
      <div className="container px-8 flex flex-col">
        <h1 className="garamond header-text-variant">{data.title}</h1>
        <p className="text-2xl max-w-xl mb-5">{data.description}</p>

        <div className="md:flex items-center gap-10">
          <div className="bg p-5 w-full mb-5 md:mb-0 md:max-w-[50%] xl:max-w-[80%] shadow-lg">
            <img src={imageHandler} alt={imageHandler} />
          </div>
          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {data.services.map((service) => (
              <Service
                key={service.id}
                num={service.id}
                title={service.title}
                desc={service.description}
                setService={setService}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;

{
  /* <h2 className="text-6xl garamond text-[#23372D] pt-10">Services</h2>
        <p className="text-xl xl:text-5xl max-w-[850px] my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad{" "}
        </p>
        <div className="flex justify-between w-full my-5">
          <p>Property listing</p>
          <p>Price Optimization</p>
          <p>Client Support</p>
          <p>Cleaning Service</p>
          <p>Guest Screening</p>
          <p>Re-stocking</p>
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-center bg-[#608C68] xl:pl-10">
          <div>
            <h3 className="text-2xl mb-3">Cleaning Service</h3>
            <p className="max-w-[577px] text-xl text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>

          <img
            src={livingRoom}
            alt=""
            className="w-[400px] h-[350px] xl:place-self-end"
          />
        </div> */
}
