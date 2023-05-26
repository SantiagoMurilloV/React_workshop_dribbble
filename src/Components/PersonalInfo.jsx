import React, { useState } from 'react';
import TextInput from './TextInput';

const PersonalInfoForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangeContactNumber = (event) => {
        const numberInput = event.target.value;
        if(!isNaN(numberInput)){
            setContactNumber(numberInput);
        }
       
    };

    return (
        <div>
            <div className="form-row">
                <div className="form-column">
                    <TextInput
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChangeFirstName}
                    />
                </div>
                <div className="form-column">
                    <TextInput
                        label="Last Name"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChangeLastName}
                    />
                </div>
            </div>
            <div className="form-row">
                
                    <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChangeEmail}
                    />
    
            </div>
            <div className="form-row">
                <div className="form-column">
                    <TextInput
                        label="Contact Number"
                        type="text"
                        name="contactNumber"
                        value={contactNumber}
                        onChange={handleChangeContactNumber}
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoForm;
