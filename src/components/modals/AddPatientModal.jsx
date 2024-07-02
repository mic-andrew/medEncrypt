// AddPatientModal.jsx
import React, { useState } from "react";
import "./styles.css";
import Modal from "./Modal";

function AddPatientModal({ isOpen, closeModal, addPatient }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [clinic, setClinic] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = {
      name,
      phone,
      date,
      time,
      clinic,
      diagnosis,
    };
    addPatient(newPatient);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Clinic</label>
          <input
            type="text"
            value={clinic}
            onChange={(e) => setClinic(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Diagnosis</label>
          <input
            type="text"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Patient</button>
      </form>
    </Modal>
  );
}

export default AddPatientModal;
