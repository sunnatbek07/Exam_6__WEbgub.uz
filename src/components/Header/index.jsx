import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import './style.scss';
import { Drawer, Dropdown } from 'antd';


const Header = () => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <Drawer
        title="Menu"
        width={500}
        onClose={onClose}
        open={open}
        className='drawer'
      >
        <p onClick={() => setOpen(false)}>
          <a href="#courses" >
            Courses
          </a>
        </p>
        <p onClick={() => setOpen(false)}>
          <a href='#services'>
            Services
          </a>
        </p>
        <Link to="/signup" onClick={() => setOpen(false)}>
          <button>
            Join
          </button>
        </Link>
      </Drawer>
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

            <Link to='/signin'>
              <button>
                Join
              </button>
            </Link>
          </div>

          <i className='bx bx-menu' onClick={() => showDrawer()}></i>
        </nav>
      </div>
    </header>
  )
}

export default Header