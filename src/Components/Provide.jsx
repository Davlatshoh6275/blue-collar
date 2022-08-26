import React from "react";
import "../styles/provide.css";
import person from "../images/provide/person.png";
import icon from "../images/provide/icon.png";

export default function Provide() {
  return (
    <div>
      <div className="conteiner">
        <div className="provide">
          <div className="provide_left">
            <img src={person} alt="img" />
          </div>
          <div className="provide_right">
            <h2>
              <img src={icon} alt="img" /> Welcome BlueCollar
            </h2>
            <h1>We Provide Your Future</h1>
            <p>
              Bluecollar Electrical services was established in 2008. We are
              trusted and reliable electricians who serve customers in the city
              as well as throughout United States Of America.
            </p>
            <p>
              We have extensive experience of domestic and business electrical
              installations and no job is too small. Our customers value our
              professionalism, work ethic and our competitive prices.
            </p>

            <div className="provede_right_box">
              <div className="provede_right_box_itemOne">
                <h1>35</h1>
                <p>
                  Years Of <br /> Experience
                </p>
              </div>
              <div className="provede_right_box_itemTwo">
                <ul>
                  <li>- For all your system requirements</li>
                  <li>- All work undertaken by qualified</li>
                  <li>- All work undertaken by qualified</li>
                  <li>- A Full Guarantee On Workmanship</li>
                  <li>- Properties at a reasonable price.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
