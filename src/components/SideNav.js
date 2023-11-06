import React from 'react';
import './SideNav.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="pixel2k23"
            style={{ color: 'inherit'}}
          >
            Pixel 2K23
          </a>&nbsp;&nbsp;&nbsp;
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/event" activeClassName="activeClicked" onClick={closeDropdown}>
            <CDBSidebarMenuItem icon="calendar">Events</CDBSidebarMenuItem>
            </NavLink>
            <div className={`dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
           <div className="event-link">
            <span>
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} /></span>
          </div>
          <div className="dropdown-content">
          {/* Add your dropdown items here */}
          <a href="/events/coding">Coding</a>
          <a href="/events/quiz">Quiz</a>
          <a href="/events/hackathon">Hackathon</a>
          <a href="/events/paperpresentation">Paper Presentation</a>
          <a href="/events/freefire">Free Fire</a>
          <a href="/events/chess">Chess</a>
          <a href="/events/photography">Photography</a>
          <a href="/events/memes">Memes</a>

          {/* Add more dropdown items as needed */}
          </div>
          </div>
            <NavLink exact to="/gallery" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="image">Gallery</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/sponsors" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="">
                Sponsors
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="mobile">
                Contact Us
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/about"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="info">
                About
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            JNTUCEA CSE
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideNav;