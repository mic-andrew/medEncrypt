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
      className="appointment-tr"
      key={index}
      onClick={() => handleRowClick(patient)}
    >
      <td>{patient.name}</td>
      <td>{patient.phone}</td>
      <td>{patient.date}</td>
      <td>{patient.age}</td>
      <td>{patient.clinic}</td>
      <td>{patient.diagnosis}</td>
    </tr>
  ));

  return (
    <>
      <main className="main-content">
        <div className="appointments">
          <div className="patient-header">
            <h3>Patients</h3>
            <button
              className="add-patient-button"
              onClick={() => setIsAddPatientModalOpen(true)}
            >
              Add Patient
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Age</th>
                <th>Clinic</th>
                <th>Diagnosis</th>
              </tr>
            </thead>
            <tbody>{patientRows}</tbody>
          </table>
        </div>
      </main>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {selectedPatient && (
          <>
            <h2>Patient Details</h2>
            <p>
              <strong>Name:</strong> {selectedPatient.name}
            </p>
            <p>
              <strong>Phone:</strong> {selectedPatient.phone}
            </p>
            <p>
              <strong>Date:</strong> {selectedPatient.date}
            </p>
            <p>
              <strong>Age:</strong> {selectedPatient.age}
            </p>
            <p>
              <strong>Clinic:</strong> {selectedPatient.clinic}
            </p>
            <p>
              <strong>Diagnosis:</strong> {selectedPatient.diagnosis}
            </p>
          </>
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
