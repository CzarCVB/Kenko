import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

import about_banner from "../../data/about_banner.png";

const About = () => {
  return (
    <div class='container'>
      <div class='about-content'>
        <p
          class='section-subtitle title-lg has-after'
          id='about-label'
          data-reveal='left'>
          About Us
        </p>

        <h2 class='headline-md' data-reveal='left'>
          Experienced Workers
        </h2>

        <p class='section-text' data-reveal='left'>
          Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui,
          a porta ante lectus dapibus est. Aliquam
        </p>

        <ul class='tab-list' data-reveal='left'>
          <li>
            <button class='tab-btn active'>Vision</button>
          </li>

          <li>
            <button class='tab-btn'>Mission</button>
          </li>

          <li>
            <button class='tab-btn'>Strategy</button>
          </li>
        </ul>

        <p class='tab-text' data-reveal='left'>
          Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui,
          a porta ante lectus dapibus est. Aliquam a bibendum mi, sed
          condimentum
        </p>

        <div class='wrapper flex'>
          <ul class='about-list'>
            <li class='about-item' data-reveal='left'>
              <AiOutlineCheckCircle />

              <span class='span'>Sonsectetur adipisicing elit</span>
            </li>

            <li class='about-item' data-reveal='left'>
              <AiOutlineCheckCircle />

              <span class='span'>Exercitation ullamco laboris</span>
            </li>

            <li class='about-item' data-reveal='left'>
              <AiOutlineCheckCircle />

              <span class='span'>Eiusmod tempor incididunt</span>
            </li>

            <li class='about-item' data-reveal='left'>
              <AiOutlineCheckCircle />

              <span class='span'>Aolore magna aliqua</span>
            </li>
          </ul>
        </div>
      </div>

      <figure class='about-banner' data-reveal='right'>
        <img
          src={about_banner}
          width='554'
          height='678'
          loading='lazy'
          alt='about banner'
          class='w-100'
        />
      </figure>
    </div>
  );
};

export default About;
