import React from "react";
import { styles } from "../styles"; 
import { socialLinks } from "../constants"; 

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex flex-wrap justify-between items-center py-5 z-20 bg-primary`}
    >
      {/* Left section: All rights reserved text */}
      <div className="flex-grow text-center sm:text-left mb-4 sm:mb-0">
        <p className="text-white text-[14px] sm:text-[16px]">
          © {new Date().getFullYear()} Rabia Ishtiaq. All Rights Reserved.
        </p>
      </div>

      {/* Right section: Social media logos */}
      <div className="flex justify-center sm:justify-end gap-6 flex-grow">
        {/* Map over the socialLinks array to render each icon */}
        {socialLinks.map((link) => (
          <a
            key={link.name} // Unique key for list items
            href={link.url} // The URL for the social profile
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            aria-label={link.name} // Accessibility for screen readers
          >
            <img
              src={link.icon} // The imported icon image
              alt={link.name} // Alt text for accessibility
              className="w-8 h-8 object-contain" // Styling for the icon size
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;