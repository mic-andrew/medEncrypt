import React, { useState } from "react";
import { appointmentsData } from "../utils";
import Modal from "../components/modals/Modal";
import AddPatient from "./AddPatient";

function PatientList() {
  const [patients, setPatients] = useState(appointmentsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
    setIsAddPatientModalOpen(false);
  };

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const patientRows = patients.map((patient, index) => (
    <tr
      className="hover:bg-gray-100 cursor-pointer"
      key={index}
      onClick={() => handleRowClick(patient)}
    >
      <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{patient.phone}</td>
      <td className="px-6 py-4 whitespace-nowrap">{patient.date}</td>
      <td className="px-6 py-4 whitespace-nowrap">{patient.age}</td>
      <td className="px-6 py-4 whitespace-nowrap">{patient.clinic}</td>
      <td className="px-6 py-4 whitespace-nowrap">{patient.diagnosis}</td>
    </tr>
  ));

  return (
    <>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-medium text-gray-700">Patients</h3>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsAddPatientModalOpen(true)}
            >
              Add Patient
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clinic
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Diagnosis
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {patientRows}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {selectedPatient && (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
            <p className="mb-2">
              <strong>Name:</strong> {selectedPatient.name}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {selectedPatient.phone}
            </p>
            <p className="mb-2">
              <strong>Date:</strong> {selectedPatient.date}
            </p>
            <p className="mb-2">
              <strong>Age:</strong> {selectedPatient.age}
            </p>
            <p className="mb-2">
              <strong>Clinic:</strong> {selectedPatient.clinic}
            </p>
            <p className="mb-2">
              <strong>Diagnosis:</strong> {selectedPatient.diagnosis}
            </p>
          </div>
        )}
      </Modal>
      <AddPatient
        isOpen={isAddPatientModalOpen}
        onClose={() => setIsAddPatientModalOpen(false)}
        onAddPatient={addPatient}
      />
    </>
  );
}

export default PatientList;
