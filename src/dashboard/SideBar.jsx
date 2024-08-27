// src/components/SideBar.js
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserInjured,
  FaLock,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaUserMd,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { useAuth } from "../context/authContext";

function SideBar({ setShowLogoutModal }) {
  const location = useLocation();
  const { user } = useAuth();

  const getMenus = () => {
    const commonMenus = [
      { menu: "Dashboard", link: "/dashboard", icon: FaHome },
      { menu: "Analytics", link: "/dashboard/analytics", icon: FaChartBar },
    ];

    const adminMenus = [
      { menu: "Patients", link: "/dashboard/patients", icon: FaUserInjured },
      { menu: "Doctors", link: "/dashboard/doctors", icon: FaUserMd },
      { menu: "K-Anonymity", link: "/dashboard/k-anonymity", icon: FaLock },
      { menu: "Settings", link: "/dashboard/settings", icon: FaCog },
    ];

    const doctorMenus = [
      { menu: "My Patients", link: "/dashboard/my-patients", icon: FaUserInjured },
    ];

    switch (user?.userType) {
      case 'admin':
        return [...commonMenus, ...adminMenus];
      case 'doctor':
        return [...commonMenus, ...doctorMenus];
      default:
        return commonMenus;
    }
  };

  const menus = getMenus();

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

SideBar.propTypes = {
  setShowLogoutModal: PropTypes.func.isRequired,
};

export default SideBar;