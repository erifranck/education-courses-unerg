import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Adminsidebar extends Component {
  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark scroll-bar"
        id="accordionSidebar"
      >
        <div
          className="sidebar-brand d-flex align-items-start justify-content-start"
          href="/admin"
        >
          <span className="d-inline-block fredoka-font ls-3 fw-600 text-success font-xl logo-text mb-0 text-capitalize lh-1">
            Elomoas.
          </span>
          <button className="ms-auto mt-2 d-lg-none" id="sidebarClose">
            <i className="ti-close text-white font-sm text-grey-100 "></i>
          </button>
        </div>

        <div className="sidebar-heading">Pages</div>

        <li className="nav-item">
          <NavLink className="navi-link" to="/admin">
            <i className="feather-pie-chart mr-2"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="has-droupdown nav-item">
          <Link to="#" className="navi-link">
            <i className="feather-video mr-2 droupdown-toggle"></i>
            <span>Course</span>
          </Link>
          <ul className="submenu">
            <li className="nav-item">
              <NavLink className="navi-link" to="/admin-productlist">
                Course List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navi-link" to="/admin-productgrid">
                Course grid
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navi-link" to="/admin-productadd">
                Add Course
              </NavLink>
            </li>
          </ul>
        </li>
        {/* <li className="has-droupdown nav-item">
          <Link to="#" className="navi-link">
            <i className="feather-slack droupdown-toggle mr-2"></i>
            <span>Channel</span>
          </Link>
          <ul className="submenu">
            <li className="nav-item">
              <NavLink className="navi-link" to="/admin-venderlist">
                Channel List
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="navi-link" to="/admin-venderview">
                Channel Details
              </NavLink>
            </li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="navi-link" to="/admin-email">
            <i className="feather-mail mr-2"></i>
            <span>Email</span>
          </NavLink>
        </li> */}
      </ul>
    );
  }
}

export default Adminsidebar;
