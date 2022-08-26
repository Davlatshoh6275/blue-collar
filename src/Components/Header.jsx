/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/header.css";
import logo_img from "../images/header/logo.png";
import massage from "../images/header/massage.png";
import phone from "../images/header/phpne.png"

export default function Header() {
  return (
    <div>
      <div className="conteiner">
        <div className="navbar">
          <nav>
            <div className="navLeft">
              <p>Opening Hours: 06:00 to 20:00</p>
            </div>
            <div className="navRight">
              <ul>
                <li>
                  <a href="#">
                    <i class="bx bxl-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bx bxl-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="navTwo">
            <div className="navTwo_logo">
              <img src={logo_img} alt="logo" />
            </div>
            <div className="navTwo_links">
              <div className="navTwo_links_item">
                <img src={massage} alt="img" />
                <div className="mavTwo_item_text">
                  <h2>Mail Us</h2>
                  <p>Info@bluecollar.com</p>
                </div>
              </div>
              <div className="navTwo_links_item">
                <img src={phone} alt="img" />
                <div className="mavTwo_item_text">
                  <h2>Call Us</h2>
                  <p>+01 569 896 654</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="header_nav">
            <div className="header_nav_left">
              <ul>
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="header_nav_right">
              <a href="#"> Have Any Questions?</a>
            </div>
          </div>

          <div className="header_content">
            <p>
              <i class="bx bx-cog"></i> Improve our customers’ lives by
              providing effective solutions.
            </p>
            <h1>
              A recognized leader in <br /> services industry
            </h1>
            <a href="#">View Services</a>
          </div>
        </div>
      </div>
    </div>
  );
}
