import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo-light.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import settingsIcon from '../../assets/images/settings-icon.svg';
import notification from '../../assets/images/bell-icon.svg';
import avatar from '../../assets/images/user-img.svg';

const Navbar = () => {
  const openNav = () => {
    const sideNav = document.getElementById("nav-items");
    sideNav.style.width = "100%";
  }

  const preventClosing = (event) => {
  event.stopPropagation();
  }

  const closeSideNav = () =>{
    const sideNav = document.getElementById("nav-items");
    if(sideNav.style.width === "100%") {sideNav.style.width = "0"}
  }

  return (
    <>
      <div id="nav-height" className='relative'>
        <div className="z-50 bg-brand text-defaultGray lg:text-white 2xl:px-[200px] h-[73px]">
          <div className='h-full flex items-center custom-container'>
            {/* Logo section starts */}
            <div className="w-full lg:w-[150px]">
              <div className="flex justify-between items-center">
                <div className="bg-brand">
                  <NavLink to="/" className='flex gap-3 items-center'>
                    <div>
                      <img src={logo} alt="Stack Logo" />
                    </div>
                    <div className='text-xl font-bold text-white'>Stack</div>
                  </NavLink>
                </div>
                <div className="lg:hidden">
                  <button type="button" onClick={openNav}>
                    <span className="sr-only">Open menu</span>
                    <svg
                      className="inline-block h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Logo section ends */}
              <div
                id="nav-items"
                onClick={closeSideNav}
                className="bg-black/50 lg:bg-transparent nav-item-container full-width">
                <div
                onClick={preventClosing}
                className="h-screen lg:h-auto bg-transparent w-[85%] sm:w-[80%] md:w-[60%] lg:w-full bg-white lg:bg-transparent">
                  <div className="block lg:hidden">
                    <div className="flex justify-between bg-brand px-2 h-[73px] items-center">
                      <NavLink to="/" className="pl-4">
                        <div className='flex gap-1 sm:gap-3 items-center'>
                          <img src={logo} alt='Stack logo' />
                          <span className='text-xl font-bold text-white inline-block'>Stack</span>
                        </div>
                      </NavLink>
                      <div className="flex lg:hidden gap-2 items-center pr-3">
                        <button className='m-0 sm:m-1'><img src={searchIcon} alt="Search" /></button>
                        <button className='m-0 sm:m-1'><img src={settingsIcon} alt="Search" /></button>
                        <button className='m-0 sm:m-1'><img src={notification} alt="Search" /></button>
                        <button className='ml-1 sm:ml-2'><img src={avatar} alt="Search" /></button>
                      </div>
                      <div className="absolute right-3 top-5">
                        <button
                          type="button"
                          className="bg-brand rounded-md inline-flex items-center justify-center text-gray-400 focus:outline-none p-1"
                          onClick={closeSideNav}
                        >
                          <span className="sr-only">Close menu</span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ffffff"
                            viewBox="0 0 24 24"
                            stroke="#ffffff"
                            aria-hidden="true"
                          >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="items-center pl-5 lg:pl-[50px] lg:flex justify-between">
                    <nav className="flex flex-col lg:flex-row pt-8 lg:pt-0 mr-5 lg:mr-0">
                      <NavLink
                        to="/"
                        onClick={closeSideNav}
                        className={({ isActive }) => isActive ? 'is-active nav-link' : 'nav-link'}>
                          Home
                      </NavLink>
                      <NavLink
                        to="/users"
                        onClick={closeSideNav}
                        className={({ isActive }) => isActive ? 'is-active nav-link' : 'nav-link'}>
                          Users
                      </NavLink>
                      <NavLink
                        to="/projects"
                        onClick={closeSideNav}
                        className="nav-link">
                          Projects
                      </NavLink>
                      <NavLink
                        to="/tasks"
                        onClick={closeSideNav}
                        className="nav-link">
                          Tasks
                      </NavLink>
                      <NavLink
                        to="/reporting"
                        onClick={closeSideNav}
                        className="nav-link">
                          Reporting
                      </NavLink>
                    </nav>
                    <div className="pt-4 lg:pt-0">
                      <div className="hidden lg:flex gap-2 items-center">
                        <button className='m-[10px]'><img src={searchIcon} alt="Search" /></button>
                        <button className='m-[10px]'><img src={settingsIcon} alt="Search" /></button>
                        <button className='m-[10px]'><img src={notification} alt="Search" /></button>
                        <button className=' ml-4'><img src={avatar} alt="Search" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    {/* <div v-if="props.sticky" id="adjust-spacing"></div> */}
    </>
  );
};

export default Navbar;