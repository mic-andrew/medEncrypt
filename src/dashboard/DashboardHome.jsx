import React from "react";
import { FaUserMd, FaUserInjured, FaLock } from "react-icons/fa";

function DashboardHome() {
  return (
    <div className="dashboard-home">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Welcome to MedCrypt Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <FaUserMd className="text-5xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Total Doctors
          </h3>
          <p className="text-3xl font-bold text-gray-900">25</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <FaUserInjured className="text-5xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Total Patients
          </h3>
          <p className="text-3xl font-bold text-gray-900">1,234</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <FaLock className="text-5xl text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            K-Anonymity Level
          </h3>
          <p className="text-3xl font-bold text-gray-900">5</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
