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
      <div className="container layout-padding flex flex-col">
        <h1 className="garamond header-text-variant">{data.title}</h1>
        <p className="text-2xl max-w-xl mb-5">{data.description}</p>

        <div className="lg:flex items-center gap-10">
          <div className="bg p-5 w-full mb-5 md:mb-0 md:max-w-[50%] xl:max-w-[80%] shadow-lg">
            <img src={imageHandler} alt={imageHandler} />
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
