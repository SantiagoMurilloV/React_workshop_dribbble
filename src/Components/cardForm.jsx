import React from 'react';
import PersonalInfoForm from './PersonalInfo';
import AddressForm from './AdressForm';
import PasswordForm from './PasswordForm';
import '../index.css';
import logo from '../image/logo.jpg'

const CardForm = () => {
  return (
    <div className="card">
      <h2>Edit Profile</h2>
      <img src={logo} alt="Profile Image" />
      <div className="form-container">
        <div className="form-section">
          <PersonalInfoForm />
        </div>
        <div className="form-section">
          <AddressForm />
        </div>
        <div className="form-section">
          <PasswordForm />
        </div>
      </div>
    </div>
  );
};

export default CardForm;