import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";

import Navbar from "./Navbar";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";
import hero_banner from "../../data/hero_banner.png";
import hero_bg from "../../data/hero_bg.png";
import footer_bg from "../../data/footer_bg.png";
import "./style.scss";

const HomePage = () => {
  return (
    <div>
      <div className='first-container'>
        <Navbar />
      </div>
      <section
        className='section hero'
        style={{ backgroundImage: `url(${hero_bg})` }}>
        <div className='container hero-container'>
          <div class='hero-content box-border'>
            <p class='hero-subtitle has-before' data-reveal='left'>
              Welcome To Kenko
            </p>

            <h1 class='headline-lg hero-title' data-reveal='left'>
              Find Nearest <br />
              Doctor.
            </h1>
            <div class='hero-card' data-reveal='left'>
              <p class='title-lg card-text'>
                Search doctors. clinics. hospitals. etc.
              </p>

              <div class='wrapper'>
                <div class='input-wrapper title-lg flex'>
                  <input
                    type='text'
                    name='location'
                    placeholder='Locations'
                    class='input-field'
                  />

                  <SlLocationPin />
                </div>

                <button class='find has-before'>
                  <FiSearch />

                  <span class='span title-md'>Find Now</span>
                </button>
              </div>
            </div>
          </div>
          <figure class='hero-banner' data-reveal='right'>
            <img
              src={hero_banner}
              width='590'
              height='517'
              loading='eager'
              alt='hero banner'
              class='w-100'
            />
          </figure>
        </div>
      </section>
      <section className='service'>
        <Services />
      </section>
      <section className='section about'>
        <About />
      </section>
      <footer
        className='footer'
        style={{ backgroundImage: `url(${footer_bg})` }}>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
