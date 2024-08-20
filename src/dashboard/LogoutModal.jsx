import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
          <FaSignOutAlt className="mr-2 text-red-500" />
          Confirm Logout
        </h2>
        <p className="mb-6 text-gray-600">Are you sure you want to logout?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
