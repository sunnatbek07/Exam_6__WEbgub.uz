import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import './style.scss';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-5">
        <nav className='nav'>
          <Link href='/' className='nav_logo'>
            <img src={logo} alt="logo" />
            <p>EBGUB.UZ</p>
          </Link>

          <div className='nav_left'>
            <ul className='nav_left-list'>
              <li className='nav_left-list--item'>
                <a href="#courses">
                  Courses
                </a>
              </li>
              <li className='nav_list-item'>
                <a href='#services'>
                  Services
                </a>
              </li>
            </ul>

            <button>
              Join
            </button>
          </div>

          <i className='bx bx-menu'></i>
        </nav>
      </div>
    </header>
  )
}

export default Header