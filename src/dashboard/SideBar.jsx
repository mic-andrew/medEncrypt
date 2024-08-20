import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserInjured,
  FaLock,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function SideBar({ setShowLogoutModal }) {
  const location = useLocation();
  const menus = [
    { menu: "Dashboard", link: "/dashboard", icon: FaHome },
    { menu: "Patients", link: "/dashboard/patients", icon: FaUserInjured },
    { menu: "K-Anonymity", link: "/dashboard/k-anonymity", icon: FaLock },
    { menu: "Analytics", link: "/dashboard/analytics", icon: FaChartBar },
    { menu: "Settings", link: "/dashboard/settings", icon: FaCog },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">MedCrypt</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          {menus.map((menu, index) => {
            const isActive = location.pathname === menu.link;
            return (
              <li key={index}>
                <Link
                  to={menu.link}
                  className={`flex items-center p-2 rounded-lg ${
                    isActive ? "bg-blue-600" : "hover:bg-gray-700"
                  }`}
                >
                  <menu.icon className="mr-3" />
                  {menu.menu}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto pt-8">
        <button
          onClick={() => setShowLogoutModal(true)}
          className="flex items-center p-2 rounded-lg hover:bg-gray-700 w-full"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
