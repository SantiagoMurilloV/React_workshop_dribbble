
import React, { useState } from 'react';
import TextInput from './TextInput';

const PasswordForm = () => {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            setPasswordError('La contraseña debe tener al menos 6 caracteres.');
        } else {
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextInput
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChangePassword}
                />
               <p style={{ color: 'red' }}>{passwordError}</p>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default PasswordForm;