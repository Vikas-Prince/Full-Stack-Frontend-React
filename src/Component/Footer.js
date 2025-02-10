// src/components/Footer.js
import React from "react";
import "font-awesome/css/font-awesome.min.css";

import "./Footer.css"; // For custom CSS styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1 */}
        <div className="footer-column">
          <h5 className="footer-heading">About Food.Co</h5>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Our Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h5 className="footer-heading">Quick Links</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h5 className="footer-heading">Follow Us</h5>
          <ul className="footer-social-links">
            <li>
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2025 Food.Co. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
