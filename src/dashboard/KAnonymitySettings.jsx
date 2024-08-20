import  { useState } from "react";

function KAnonymitySettings() {
  const [kValue, setKValue] = useState(5);
  const [attributes, setAttributes] = useState([
    { name: "Age", isQuasiIdentifier: true },
    { name: "Gender", isQuasiIdentifier: true },
    { name: "Zipcode", isQuasiIdentifier: true },
    { name: "Disease", isQuasiIdentifier: false },
  ]);

  const handleKValueChange = (e) => {
    setKValue(parseInt(e.target.value));
  };

  const toggleQuasiIdentifier = (index) => {
    const updatedAttributes = [...attributes];
    updatedAttributes[index].isQuasiIdentifier =
      !updatedAttributes[index].isQuasiIdentifier;
    setAttributes(updatedAttributes);
  };

  return (
    <div className="k-anonymity-settings">
      <h2>K-Anonymity Settings</h2>
      <div className="k-value-setting">
        <label htmlFor="k-value">K Value:</label>
        <input
          type="number"
          id="k-value"
          value={kValue}
          onChange={handleKValueChange}
          min="2"
        />
      </div>
      <div className="attributes-list">
        <h3>Attributes:</h3>
        <ul>
          {attributes.map((attr, index) => (
            <li key={index}>
              <span>{attr.name}</span>
              <label>
                <input
                  type="checkbox"
                  checked={attr.isQuasiIdentifier}
                  onChange={() => toggleQuasiIdentifier(index)}
                />
                Quasi-Identifier
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KAnonymitySettings;
