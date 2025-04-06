import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <a
        className="npm-link"
        href="https://www.npmjs.com/package/react-jalali-picker"
        target="_blank"
      >
        React-Jalali-Picker
      </a>
      <div>
        <span  className="link">By: </span>
        <a
          className="link"
          href="https://github.com/behzadbakhshayesh"
          target="_blank"
        >
          Behzad Bakhshayesh
        </a>
      </div>
    </div>
  );
};

export default Header;
