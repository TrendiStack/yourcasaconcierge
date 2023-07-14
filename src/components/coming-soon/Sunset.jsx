import { motion as m } from 'framer-motion';
import { useEffect, useState } from 'react';

const Sunset = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    const mobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (window.innerWidth <= 320) {
      setSmallScreen(true);
    } else if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <m.video
      animate={{
        width: '80%',
        height: smallScreen ? '55%' : isMobile ? '65%' : '80%',
      }}
      initial={{
        width: '100%',
        height: '100%',
      }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.5,
      }}
      aria-label="sunset video"
      className="absolute top-1/2 left-1/2 h-full w-screen object-cover -translate-x-1/2 -translate-y-1/2"
      autoPlay
      loop
      muted
      playsInline // required for iOS
      controls={false}
    >
      <source
        src="https://bobward-image-bucket.s3.ca-central-1.amazonaws.com/beach.mp4"
        type="video/mp4"
      />
    </m.video>
  );
};

export default Sunset;
