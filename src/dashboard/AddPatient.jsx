import { useState } from 'react';
import './AddPatient.css';

const AddPatient = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    age: '',
    clinic: '',
    diagnosis: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddPatient = () => {
    console.log('Patient Data:', formData);
    // Add logic to save the patient data
  };

  const handleCancel = () => {
    // Add logic to handle cancel action
  };

  return (
    <div className="add-patient-page">
      <h2>Add Patient</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="text" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Clinic:
          <input type="text" name="clinic" value={formData.clinic} onChange={handleChange} />
        </label>
        <label>
          Diagnosis:
          <input type="text" name="diagnosis" value={formData.diagnosis} onChange={handleChange} />
        </label>
      </form>
      <div className="page-buttons">
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleAddPatient}>Add Patient</button>
      </div>
    </div>
  );
};

export default AddPatient;
