import React, { useState, useEffect } from "react";
import { FaUserMd, FaUserInjured } from "react-icons/fa";
import { API_BASE_URL } from "../utils";

function DashboardHome() {
  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [doctorsResponse, patientsResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/doctors`),
          fetch(`${API_BASE_URL}/patients`),
        ]);

        const doctorsData = await doctorsResponse.json();
        const patientsData = await patientsResponse.json();

        setDoctorCount(doctorsData.length);
        setPatientCount(patientsData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Welcome to MedCrypt Dashboard
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <FaUserMd className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Total Doctors
            </h3>
            <p className="text-3xl font-bold text-gray-900">{doctorCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <FaUserInjured className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Total Patients
            </h3>
            <p className="text-3xl font-bold text-gray-900">{patientCount}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardHome;
