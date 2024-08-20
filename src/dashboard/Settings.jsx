import React, { useState } from "react";
import { FaCog, FaBell, FaLock, FaUserShield } from "react-icons/fa";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <div className=" mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        <FaCog className="mr-2" />
        Settings
      </h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaBell className="mr-2" />
            Notifications
          </h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">
              Enable email notifications
            </span>
          </label>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaLock className="mr-2" />
            Security
          </h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={() => setTwoFactor(!twoFactor)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">
              Enable two-factor authentication
            </span>
          </label>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaUserShield className="mr-2" />
            Privacy
          </h3>
          <p className="text-gray-700 mb-2">Data retention period:</p>
          <select className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>30 days</option>
            <option>60 days</option>
            <option>90 days</option>
            <option>1 year</option>
          </select>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Theme</h3>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-600"
                name="theme"
                value="light"
                checked={theme === "light"}
                onChange={() => setTheme("light")}
              />
              <span className="ml-2">Light</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-600"
                name="theme"
                value="dark"
                checked={theme === "dark"}
                onChange={() => setTheme("dark")}
              />
              <span className="ml-2">Dark</span>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
