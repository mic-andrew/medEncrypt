import { useState } from "react";
import "./new_modal.css";

const Modal = ({ setShowModal }) => {
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
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleAddPatient = () => {
    // Add patient logic here
    console.log("Patient added:", formData);
    setShowModal(false);
  };

  return (
    <div className="backdrop">
      <div className="modal">
        <h2>Add Patient</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
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
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleAddPatient}>Add Patient</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
