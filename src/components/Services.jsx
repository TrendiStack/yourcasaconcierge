import { useContext, useState } from "react";
import { motion as m } from "framer-motion";
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
import { AnimationContext } from "../context/AnimationContext";

const Services = () => {
  const { generic, absoluteText } = useContext(AnimationContext);
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
      <m.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
        className="container layout-padding flex flex-col"
      >
        <m.h1 variants={generic} className="garamond header-text-variant">
          {data.title}
        </m.h1>
        <m.p variants={generic} className="text-2xl max-w-xl mb-5">
          {data.description}
        </m.p>

        <div className="lg:flex items-center gap-10">
          <m.div
            variants={generic}
            className="bg p-5 w-full mb-5 md:mb-0 md:max-w-[50%] xl:max-w-[80%] shadow-lg"
          >
            <img src={imageHandler} alt={imageHandler} />
          </m.div>
          <m.ul
            variants={generic}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {data.services.map((service) => (
              <Service
                key={service.id}
                num={service.id}
                title={service.title}
                desc={service.description}
                setService={setService}
              />
            ))}
          </m.ul>
        </div>
      </m.div>
    </div>
  );
};

export default Services;
