import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Breadcrumb, Dropdown } from "antd";
import logo from "../../assets/images/logo.svg";
import "./style.scss";

const index = () => {
  const items = [
    {
      key: '1',
      label: (
        <Link to='/sozlamalar' className="flex items-center gap-2">
          <i className='bx bxs-cog'></i>
          <span>Sozlamalar</span>
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to='/signin' onClick={() => localStorage.clear()} className="flex items-center gap-2">
          <i className='bx bx-left-arrow-alt'></i>
          <span>Chiqish</span>
        </Link>
      ),
    },
  ];

  return (
    <div className="ssss">
      <header className="flex items-center justify-between w-full fixed top-0 h-[80px] px-[50px] z-50 head bg-white">
        <Link to="/dashboard" className="flex items-center gap-2">
          <img src={logo} alt="Dashboard logo" />
          <span>Ebgub.uz</span>
        </Link>


        <div className="flex items-center gap-5 login">
          <button className="flex items-center">
            <i className="bx bx-menu text-[30px]"></i>
          </button>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <div className="flex items-center">
              <div className="hidden md:flex items-center gap-1 user cursor-pointer">
                <i className="bx bxs-user-circle text-[30px]"></i>
                <p>User Name</p>
              </div>
            </div>
          </Dropdown>
        </div>
      </header>

      <div className="down">
        <div className="sidebar fixed bg-white translate-x-[-300px] md:translate-x-[0] md:w-[250px]">
          <ul>
            <li>
              <NavLink to='/dashboard/' className={"nav__link"}>
                <i className="bx bx-home text-[24px] text-[#1b2336]"></i>
                <p>Bosh sahifa</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/oquvchilar" className="nav__link">
                <i className="bx bx-child text-[24px] text-[#1b2336]"></i>
                <p>O'quvchilar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/kurslar" className="nav__link">
                <i className="bx bxs-book-alt text-[24px] text-[#1b2336]"></i>
                <p>Kurslar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/buyurtmachilar" className="nav__link">
                <i className="bx bxs-user-voice text-[24px] text-[#1b2336]"></i>
                <p>Buyurtmachilar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/xizmatlar" className="nav__link">
                <i className="bx bxs-taxi text-[24px] text-[#1b2336]"></i>
                <p>Xizmatlar</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <main className="ml-[0] md:ml-[250px]">
          <div className="outlet">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default index;
