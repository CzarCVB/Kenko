import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import icon_1 from "../../data/icon_1.png";
import icon_2 from "../../data/icon_2.png";
import icon_3 from "../../data/icon_3.png";
import icon_4 from "../../data/icon_4.png";

const Services = () => {
  return (
    <div class='container'>
      <ul class='service-list'>
        <li>
          <div class='service-card' data-reveal='bottom'>
            <div class='card-icon'>
              <img
                src={icon_1}
                width='71'
                height='71'
                loading='lazy'
                alt='icon'
              />
            </div>

            <h3 class='headline-sm card-title'>
              <a href='/'>Psychiatry</a>
            </h3>

            <p class='card-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>

            <button class='btn-circle' aria-label='read more about psychiatry'>
              <AiOutlineArrowRight />
            </button>
          </div>
        </li>

        <li>
          <div class='service-card' data-reveal='bottom'>
            <div class='card-icon'>
              <img
                src={icon_2}
                width='71'
                height='71'
                loading='lazy'
                alt='icon'
              />
            </div>

            <h3 class='headline-sm card-title'>
              <a href='/'>Gynecology</a>
            </h3>

            <p class='card-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>

            <button class='btn-circle' aria-label='read more about Gynecology'>
              <AiOutlineArrowRight />
            </button>
          </div>
        </li>

        <li>
          <div class='service-card' data-reveal='bottom'>
            <div class='card-icon'>
              <img
                src={icon_3}
                width='71'
                height='71'
                loading='lazy'
                alt='icon'
              />
            </div>

            <h3 class='headline-sm card-title'>
              <a href='/'>Pulmonology</a>
            </h3>

            <p class='card-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>

            <button class='btn-circle' aria-label='read more about Pulmonology'>
              <AiOutlineArrowRight />
            </button>
          </div>
        </li>

        <li>
          <div class='service-card' data-reveal='bottom'>
            <div class='card-icon'>
              <img
                src={icon_4}
                width='71'
                height='71'
                loading='lazy'
                alt='icon'
              />
            </div>

            <h3 class='headline-sm card-title'>
              <a href='/'>Orthopedics</a>
            </h3>

            <p class='card-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>

            <button class='btn-circle' aria-label='read more about Orthopedics'>
              <AiOutlineArrowRight />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Services;
