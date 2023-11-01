import React from 'react';
import logo from "../../assets/images/logo.svg";
import { Link } from 'react-router-dom';
import facebook from "../../assets/images/facebook.svg";
import tweeter from "../../assets/images/tweeter.svg";
import instagram from "../../assets/images/instagram.svg";
import behance from "../../assets/images/behance.svg";
import earth from "../../assets/images/earth.svg";
import './style.scss';

const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto px-5'>
        <div className="f_wrapper">
          <div className='footer_1'>
            <Link to='/' className='footer_logo'>
              <img src={logo} alt="logo" />
              <p>EBGUB.UZ</p>
            </Link>

            <p className='footer_info'>
              Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className='footer_2'>
            <p className='title'>Quick Links</p>

            <div className='f_links'>
              <a href='/'>About</a>
              <a href='/'>Blog</a>
              <a href='#courses'>Course</a>
              <a href='/'>Contact</a>
            </div>
          </div>

          <div className='footer_3'>
            <p className='title'>Contact us</p>

            <div className='f_links'>
              <div className='link'>
                <i className='bx bx-phone'></i>
                <span>+998 99 649 98 07</span>
              </div>

              <div className='link'>
                <i className='bx bx-envelope' ></i>
                <span>webhub@example.com</span>
              </div>
            </div>
          </div>

          <div className='location'>
            <i className='bx bx-map'></i>
            <p>Toshkent , Chilonzor A9</p>
          </div>
        </div>

        <div className='f_bottom'>
          <p>Copyright 2023 | Mystery</p>

          <div className='social'>
            <img src={facebook} alt="Icon" />
            <img src={tweeter} alt="Icon" />
            <img src={instagram} alt="Icon" />
            <img src={behance} alt="Icon" />
            <img src={earth} alt="Icon" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer