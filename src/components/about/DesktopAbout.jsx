import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';
import AboutArticle from './AboutArticle';
import { SanityContext } from '../../context/SanityContext';
import { urlFor } from '../../lib/client';

const DesktopAbout = () => {
  const { about: data } = useContext(SanityContext);
  const { generic } = useContext(AnimationContext);
  const about = data[0] === undefined ? null : data[0];

  return (
    <m.div
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <m.h1
        variants={generic}
        className="about-header-text text-primary garamond lg:relative top-12 px-10 text-center tracking-tight z-30"
      >
        {about?.firstLineOfTitle} <br /> {about?.secondLineOfTitle}
      </m.h1>
      {about?.image && (
        <m.img
          variants={generic}
          src={urlFor(about.image).url()}
          loading="lazy"
          alt="living room image"
          className="w-full max-h-[600px] object-cover "
        />
      )}

      {/* <m.div
        variants={generic}
        className="text-light container layout-padding md:border-t-2 border-black md:mt-24"
      >
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-10 text-primary text-base xl:text-lg pt-10">
          {about?.paragraphs.map((item, index) => {
            return (
              <AboutArticle
                key={index}
                title={item.title}
                text={item.paragraph}
              />
            );
          })}
        </div>
      </m.div> */}
      <div className="md:border-t-2 border-black md:mt-16"></div>
      <m.div variants={generic} className="text-2xl text-center mt-16 p-10">
        <h2>
          We are an end- to- end short term rental management company, offering
          homeowners all the latest products and services to maximize rental
          potential while connecting guests with meaningful experiences and
          luxury stays.{' '}
        </h2>
        <p>
          Our team offers 10+ years of experience in hospitality, real estate
          investing and short term property management.{' '}
        </p>
      </m.div>
    </m.div>
  );
};

export default DesktopAbout;
