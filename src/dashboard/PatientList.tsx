import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import AddPatient from "./AddPatient";
import { API_BASE_URL } from "../utils";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/patients`);
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };

  const addPatient = async (patientData) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/patients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      });
      const newPatient = await response.json();
      setPatients([...patients, newPatient]);
    } catch (error) {
      console.error("Error adding patient:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPatient = (patientData) => {
    addPatient(patientData);
    setIsAddPatientModalOpen(false);
  };

  return (
    <div className="mx-auto px-4 py-8 w-full">
      <div className="flex justify-between items-center mb-6 bg-gray-100 p-4 rounded-md">
        <h1 className="text-3xl font-bold">Patient List</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsAddPatientModalOpen(true)}
        >
          Add Patient
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ReactLoading type="spin" color="#4299e1" height={50} width={50} />
        </div>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Age</th>
              <th className="py-2 px-4 border-b">Clinic</th>
              <th className="py-2 px-4 border-b">Diagnosis</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td className="py-2 px-4 border-b">{patient.name}</td>
                <td className="py-2 px-4 border-b">{patient.phone}</td>
                <td className="py-2 px-4 border-b">{patient.date}</td>
                <td className="py-2 px-4 border-b">{patient.age}</td>
                <td className="py-2 px-4 border-b">{patient.clinic}</td>
                <td className="py-2 px-4 border-b">{patient.diagnosis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <AddPatient
        isOpen={isAddPatientModalOpen}
        onClose={() => setIsAddPatientModalOpen(false)}
        onAddPatient={handleAddPatient}
        patientCount={patients.length}
      />
    </div>
  );
};

export default PatientList;
