import React from "react";
import { motion } from "framer-motion";

// Import The Firms
import Apple from '../../src/assets/logos/apple.svg';
import Discord from '../../src/assets/logos/discord.svg';
import Facebook from '../../src/assets/logos/facebook.svg';
import Github from '../../src/assets/logos/github.svg';
import Google from '../../src/assets/logos/google.svg';
import Instagram from '../../src/assets/logos/instagram.svg';
import Linkedin from '../../src/assets/logos/linkedin.svg';
import Stripe from '../../src/assets/logos/stripe.svg';
import Tiktok from '../../src/assets/logos/tiktok.svg';
import Twitter from '../../src/assets/logos/twitter.svg';
import Windows from '../../src/assets/logos/windows.svg';
import Wordpress from '../../src/assets/logos/wordpress.svg';
import Youtube from '../../src/assets/logos/youtube.svg';

const InfiniteScroll: React.FC = () => {
  const logos = [
    Apple,
    Discord,
    Facebook,
    Github,
    Google,
    Instagram,
    Linkedin,
    Stripe,
    Tiktok,
    Twitter,
    Windows,
    Wordpress,
    Youtube,
  ];

  const logoWidth = 80; // Approximate width of each logo
  const containerWidth = logos.length * logoWidth;

  // Duplicate logos to ensure seamless scroll
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden relative bg-gray-100 py-4">
      <motion.div
        className="flex gap-10"
        animate={{ x: ['0%', `-${containerWidth}px`] }} // Fixed backtick interpolation
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          width: `${containerWidth * 2}px`, // Account for repeated logos
        }}
      >
        {repeatedLogos.map((Logo, index) => (
          <div
            key={index}
            className="w-10 h-10 flex-shrink-0 flex items-center justify-center mx-2"
          >
            <img
              src={Logo}
              alt={`Firm ${index % logos.length + 1}`}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
