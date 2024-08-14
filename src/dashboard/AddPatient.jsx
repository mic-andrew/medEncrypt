import React, { useState } from "react";
import "./AddPatient.css";

const AddPatient = ({ isOpen, onClose, onAddPatient, patientCount }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    age: "",
    clinic: "",
    diagnosis: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const anonymizeData = (data) => {
    const newPatientNumber = patientCount + 1;
    return {
      name: `Patient ${newPatientNumber}`,
      phone: data.phone.slice(0, 3) + "xxxx" + data.phone.slice(-4),
      date: data.date,
      age: data.age,
      clinic: data.clinic,
      diagnosis: data.diagnosis,
    };
  };

  const handleAddPatient = () => {
    const anonymizedData = anonymizeData(formData);
    onAddPatient(anonymizedData);
    setFormData({
      name: "",
      phone: "",
      date: "",
      age: "",
      clinic: "",
      diagnosis: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="add-patient-modal">
        <h2>Add Patient</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Will be anonymized"
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g., 1234567890"
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="e.g., Jan 2024"
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g., 20-39"
            />
          </label>
          <label>
            Clinic:
            <input
              type="text"
              name="clinic"
              value={formData.clinic}
              onChange={handleChange}
            />
          </label>
          <label>
            Diagnosis:
            <input
              type="text"
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
            />
          </label>
        </form>
        <div className="modal-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleAddPatient}>Add Patient</button>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
