import React from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
     <>
  <header className="header-top-strip py-3">
    <div className="container-xxl">
      <div className="row">
      <div className="col-6">
        <p>Free Delivery for Purchases Over Ghc300</p>
        </div>
      <div className="col-6">
        <p>
          Hotline: <a href="tel:+233 2768 86105">+233 276886105 </a>
        </p>
      </div>
    </div>
    </div>
    </header>
    </>
  );
};

export default Header;