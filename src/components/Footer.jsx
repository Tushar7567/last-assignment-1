import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="cont-f">
        <div className="left">
          <div>SCAPE</div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
        </div>
        <div className="center">
          <h3>Useful Links</h3>
         <div className="list">
         <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Man Fashion</li>
            <li>Woman Fashion</li>
          </ul>
          <ul>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>About</li>
            <li>Terms</li>
          </ul>
         </div>
        </div>
        <div className="right">
          <h3>Contact</h3>
         <ul>
         <li>72 City Hall Road, Patna, India</li>
          <li>+91 140 8970005</li>
          <li>contact@scape.in</li>
         </ul>
        </div>
      </div>
      <div className="copyright">
        @copyright all the resource and content are solely mine and only mine to use.
      </div>
    </div>
  );
};

export default Footer;
