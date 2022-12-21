import React from "react";
import { TbMailOpened } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { BiMapAlt } from "react-icons/bi";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialGoogle,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div class='container'>
      <div class='section footer-top'>
        <div class='footer-brand' data-reveal='bottom'>
          <ul class='contact-list has-after'>
            <li class='contact-item'>
              <div class='item-icon'>
                <TbMailOpened />
              </div>

              <div>
                <p>
                  Main Email :{" "}
                  <a href='mailto:contact@website.com' class='contact-link'>
                    contact@&shy;website.com
                  </a>
                </p>

                <p>
                  Inquiries :{" "}
                  <a href='mailto:Info@mail.com' class='contact-link'>
                    Info@mail.com
                  </a>
                </p>
              </div>
            </li>

            <li class='contact-item'>
              <div class='item-icon'>
                <IoCallOutline />
              </div>

              <div>
                <p>
                  Office Telephone :{" "}
                  <a href='tel:0029129102320' class='contact-link'>
                    0029129102320
                  </a>
                </p>

                <p>
                  Mobile :{" "}
                  <a href='tel:000232439493' class='contact-link'>
                    000 2324 39493
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div class='footer-list' data-reveal='bottom'>
          <p class='headline-sm footer-list-title'>About Us</p>

          <p class='text'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </p>

          <address class='address'>
            <BiMapAlt />

            <span class='text'>
              2416 Mapleview Drive <br />
              Tampa, FL 33634
            </span>
          </address>
        </div>

        <ul class='footer-list' data-reveal='bottom'>
          <li>
            <p class='headline-sm footer-list-title'>Services</p>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              Conditions
            </a>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              Listing
            </a>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              How It Works
            </a>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              What We Offer
            </a>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              Latest News
            </a>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              Contact Us
            </a>
          </li>
        </ul>

        <ul class='footer-list' data-reveal='bottom'>
          <li>
            <p class='headline-sm footer-list-title'>Useful Links</p>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              Conditions
            </a>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              Terms of Use
            </a>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              Our Services
            </a>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              Join as a Doctor
            </a>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              New Guests List
            </a>
          </li>

          <li>
            <a href='/' class='text footer-link'>
              The Team List
            </a>
          </li>
        </ul>

        <div class='footer-list' data-reveal='bottom'>
          <p class='headline-sm footer-list-title'>Subscribe</p>

          <form action='' class='footer-form'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              class='input-field title-lg'
            />

            <button type='submit' class='find has-before title-md'>
              Subscribe
            </button>
          </form>

          <p class='text'>
            Get the latest updates via email. Any time you may unsubscribe
          </p>
        </div>
      </div>

      <div class='footer-bottom'>
        <p class='text copyright'>&copy; Doclab 2022 | All Rights Reserved</p>

        <ul class='social-list flex'>
          <li>
            <a href='/' class='social-link'>
              <SlSocialFacebook />
            </a>
          </li>

          <li>
            <a href='/' class='social-link'>
              <SlSocialTwitter />
            </a>
          </li>

          <li>
            <a href='/' class='social-link'>
              <SlSocialGoogle />
            </a>
          </li>

          <li>
            <a href='/' class='social-link'>
              <SlSocialLinkedin />
            </a>
          </li>

          <li>
            <a href='/' class='social-link'>
              <SlSocialInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
