import { useState } from "react";

import "./Profile.css";

const data = {
  id: "25",
  firstName: "John",
  lastName: "Doe",
  age: "28",
  contactNumber: "+919083901382",
  emergencyNumber: "+919458926752",
  address: "NA",
  bloodGroup: "NA",
  allergies: "NA",
  symptoms: "NA",
  diagnosis: "NA",
  treatment: "NA",
  followPeriod: "NA",
};

export default function Profile() {
  const [formDetails, setFormDetails] = useState(data);

  const handleFieldChange = (field, value) => {
    setFormDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className='patient'>
      <h1 style={{ fontWeight: "bold" }}>Patient Details</h1>
      <form>
        <div>
          <label className='patient_column'>
            Patient ID
            <input
              type='text'
              value={formDetails.id}
              onChange={(e) => handleFieldChange("id", e.target.value)}
            />
          </label>
        </div>
        <div className='patient_row'>
          <label className='column' style={{ marginRight: 20 }}>
            First Name
            <input
              type='text'
              value={formDetails.firstName}
              onChange={(e) => handleFieldChange("firstName", e.target.value)}
            />
          </label>
          <label className='column'>
            Last Name
            <input
              type='text'
              value={formDetails.lastName}
              onChange={(e) => handleFieldChange("lastName", e.target.value)}
            />
          </label>
        </div>
        <label className='patient_column'>
          Age
          <input
            type='number'
            value={formDetails.age}
            onChange={(e) => handleFieldChange("age", e.target.value)}
          />
        </label>
        <div className='patient_row'>
          <label className='column' style={{ marginRight: 20 }}>
            Contact Number
            <input
              type='tel'
              value={formDetails.contactNumber}
              onChange={(e) =>
                handleFieldChange("contactNumber", e.target.value)
              }
            />
          </label>
          <label className='patient_column'>
            Emergency Number
            <input
              type='tel'
              value={formDetails.emergencyNumber}
              onChange={(e) =>
                handleFieldChange("emergencyNumber", e.target.value)
              }
            />
          </label>
        </div>
        <label className='patient_column'>
          Address
          <input
            type='text'
            value={formDetails.address}
            onChange={(e) => handleFieldChange("address", e.target.value)}
          />
        </label>
        <label className='patient_column'>
          Blood Group
          <input
            type='text'
            value={formDetails.bloodGroup}
            onChange={(e) => handleFieldChange("bloodGroup", e.target.value)}
          />
        </label>
        <label className='patient_column'>
          Allergies
          <input
            type='text'
            value={formDetails.allergies}
            onChange={(e) => handleFieldChange("allergies", e.target.value)}
          />
        </label>
        <label className='patient_column'>
          Symptoms
          <input
            type='text'
            value={formDetails.symptoms}
            onChange={(e) => handleFieldChange("symptoms", e.target.value)}
          />
        </label>
        <label className='patient_column'>
          Diagnosis
          <input
            type='text'
            value={formDetails.diagnosis}
            onChange={(e) => handleFieldChange("diagnosis", e.target.value)}
          />
        </label>
        <label className='patient_column'>
          Treatment
          <input
            type='text'
            value={formDetails.treatment}
            onChange={(e) => handleFieldChange("treatment", e.target.value)}
          />
        </label>
        <label className='patient_column'>
          Follow up period
          <input
            type='text'
            value={formDetails.followPeriod}
            onChange={(e) => handleFieldChange("followPeriod", e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
