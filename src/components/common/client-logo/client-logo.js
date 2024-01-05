import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './client-logo.scss';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Image } from '../../shared';

const ParallaxText = ({ children, baseVelocity }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    });
  
    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  
    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
  
      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
      baseX.set(baseX.get() + moveBy);
    });
  
    return (
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    );
  };

  
ParallaxText.propTypes = {
    children: PropTypes.any.isRequired,
    baseVelocity: PropTypes.number.isRequired,
};

const ClientLogo = () => {
    return (
        <div className='clientLogos grayLightBg'>
            <ParallaxText baseVelocity={-0.5}>
              <Image src='images/client-logo/1.png' />
              <Image src='images/client-logo/2.png' />
              <Image src='images/client-logo/3.png' />
              <Image src='images/client-logo/4.png' />
              <Image src='images/client-logo/5.png' />
              <Image src='images/client-logo/6.png' />
              <Image src='images/client-logo/7.png' />
              <Image src='images/client-logo/8.png' />
              <Image src='images/client-logo/9.png' />
              <Image src='images/client-logo/10.png' />
              <Image src='images/client-logo/11.png' />
              <Image src='images/client-logo/12.png' />
              <Image src='images/client-logo/13.png' />
              <Image src='images/client-logo/15.png' />
              <Image src='images/client-logo/16.png' />
              <Image src='images/client-logo/17.png' />
              <Image src='images/client-logo/18.png' />
              <Image src='images/client-logo/19.png' />
              <Image src='images/client-logo/20.png' />
              <Image src='images/client-logo/21.png' />
            </ParallaxText>
            <ParallaxText baseVelocity={0.5}>
              <Image src='images/client-logo/22.png' />
              <Image src='images/client-logo/23.png' />
              <Image src='images/client-logo/24.png' />
              <Image src='images/client-logo/25.png' />
              <Image src='images/client-logo/26.png' />
              <Image src='images/client-logo/28.png' />
              <Image src='images/client-logo/29.png' />
              <Image src='images/client-logo/30.png' />
              <Image src='images/client-logo/31.png' />
              <Image src='images/client-logo/32.png' />
              <Image src='images/client-logo/33.png' />
              <Image src='images/client-logo/34.png' />
              <Image src='images/client-logo/35.png' />
              <Image src='images/client-logo/36.png' />
              <Image src='images/client-logo/37.png' />
              <Image src='images/client-logo/38.png' />
              <Image src='images/client-logo/39.png' />
              <Image src='images/client-logo/40.png' />
            </ParallaxText>
        </div>
    )
}

export default ClientLogo