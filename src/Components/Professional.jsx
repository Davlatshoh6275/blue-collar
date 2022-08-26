/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../styles/professional.css";
import icon from '../images/provide/icon.png'
import building from "../images/profesional/buildings.png"
import home from "../images/profesional/home.png"
import factory from "../images/profesional/factory.png"
import buildingTwo from "../images/profesional/buildingsTwo.png"
import person from "../images/profesional/person.png"
 
export default function Professional() {
  return (
    <div>
      <div className="conteiner">
        <div className="profesional">
          <h2>
            <img src={icon} alt="img" /> What We Offer
          </h2>
          <h1>Professional Main Services</h1>
          <p>
            We have extensive experience of domestic and business electrical
            installations and no job is too small. Our customers value our
            professionalism, work ethic and our competitive prices.
          </p>
          <div className="btns">
            <a href="#" className='active'>
              <img src={building} alt="img" />
              Commercial
            </a>
            <a href="#">
              <img src={home} alt="img" />
              Residential
            </a>
            <a href="#">
              <img src={factory} alt="img" />
              Industrial
            </a>
          </div>

          <div className="profesional_box">
            <div className="professional_box_left">
              <h3>
                <img src={buildingTwo} alt="img" />
                Electrical installation
              </h3>
              <h1>Commercial</h1>
              <p>
                Electrical & Maintenance Services Ltd offers a full range of
                electrical services to suit your needs – from moving a light
                switch to complete house rewires.
              </p>
              <p className='text'>
                In addition to providing fully qualified, competent electricians
                in and around London, the company also runs an electrical
                wholesale shop.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className="professional_box_right">
              <img src={person} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
