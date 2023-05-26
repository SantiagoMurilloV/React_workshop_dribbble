import React, { useState } from 'react';
import TextInput from './TextInput';

const AddressForm = () => {
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    };

    const handleChangeState = (event) => {
        setState(event.target.value);
    };

    const handleChangeZipCode = (event) => {
        const zipInput = event.target.value;
        if(!isNaN(zipInput)){
            setZipCode(zipInput);
        }
    };

    const handleChangeCity = (event) => {
        setCity(event.target.value);
    };

    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };

    return (
        <div>
            <div className="form-row">
                <div className="form-column">
                    <TextInput
                        label="Address"
                        type="text"
                        name="Address"
                        value={address}
                        onChange={handleChangeAddress}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-column">
                    <TextInput
                        label="City"
                        type="text"
                        name="city"
                        value={city}
                        onChange={handleChangeCity}
                    />
                </div>
                <div className="form-column">
                    <TextInput
                        label="State"
                        type="text"
                        name="state"
                        value={state}
                        onChange={handleChangeState}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-column">
                    <TextInput
                        label="Zip Code"
                        type="text"
                        name="zipCode"
                        value={zipCode}
                        onChange={handleChangeZipCode}
                    />
                </div>
                <div className="form-column">
                    <TextInput
                        label="Country"
                        type="text"
                        name="country"
                        value={country}
                        onChange={handleChangeCountry}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddressForm;