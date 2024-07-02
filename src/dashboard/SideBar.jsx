import React from "react";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const menus = [
    { menu: "Dashboard", link: "/dashboard" },
    { menu: "Appointments", link: "/appointments" },
    { menu: "Doctors", link: "/doctors" },
    { menu: "Patients", link: "/patients" },
    { menu: "Reports", link: "/reports" },
    { menu: "Settings", link: "/settings" },
    { menu: "Dark Mode", link: "/dark-mode" },
    { menu: "Logout", link: "/logout" },
  ];

  return (
    <aside className="sidebar">
      <div>
        <h2>MedCrypt</h2>
        <ul className="menu">
          {menus.map((menu, index) => {
            const isActive = location.pathname === menu.link;
            return (
              <li key={index}>
                <Link to={menu.link} className={isActive ? "active" : ""}>
                  {menu.menu}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="logout">
        <a href="#logout">Logout</a>
      </div>
    </aside>
  );
}

export default SideBar;
