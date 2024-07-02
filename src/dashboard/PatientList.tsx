import React, { useState } from 'react';
import { appointmentsData } from '../utils';
import Modal from '../components/modals/Modal';
import AddPatientModal from '../components/modals/AddPatientModal';

function PatientList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const appointmentRows = appointmentsData.map((appointment, index) => (
    <tr className="appointment-tr" key={index} onClick={() => handleRowClick(appointment)}>
      <td>{appointment.name}</td>
      <td>{appointment.phone}</td>
      <td>{appointment.date}</td>
      <td>{appointment.time}</td>
      <td>{appointment.clinic}</td>
      <td>{appointment.diagnosis}</td>
    </tr>
  ));

  return (
    < >
      <main className="main-content">
              <div className="appointments">
                  
                  <h3>Appointments</h3>
                    <div className="add-patient-btn">
                      <button>Add Patient</button>
                    </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Clinic</th>
                <th>Diagnosis</th>
              </tr>
            </thead>
            <tbody>{appointmentRows}</tbody>
          </table>
        </div>
      </main>
      <div className={`modal ${isModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Patient Details</h2>
            <span className="modal-close" onClick={closeModal}>&times;</span>
          </div>
          {selectedPatient && (
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {selectedPatient && (
          <>
            <p><strong>Name:</strong> {selectedPatient.name}</p>
            <p><strong>Phone:</strong> {selectedPatient.phone}</p>
            <p><strong>Date:</strong> {selectedPatient.date}</p>
            <p><strong>Time:</strong> {selectedPatient.time}</p>
            <p><strong>Clinic:</strong> {selectedPatient.clinic}</p>
            <p><strong>Diagnosis:</strong> {selectedPatient.diagnosis}</p>
          </>
        )}
      </Modal>
          )}
              </div>
              
               <AddPatientModal
        isOpen={isAddPatientModalOpen}
        closeModal={closeModal}
        addPatient={addPatient}
      />
      </div>
    </>
  );
}

export default PatientList;
