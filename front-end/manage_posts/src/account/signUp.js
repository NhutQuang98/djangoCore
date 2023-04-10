import React, { useState } from 'react';

const SignUp = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${userName}, 
                    Password: ${password}, 
                    VerifPassword: ${verifyPassword},
                    Name: ${name},
                    Date of birth: ${dateOfBirth},
                    Number phone: ${numberPhone}
                    Email: ${email}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign-Out</h2>
            <input
                type="text"
                value={userName}
                onChange={(event) => setUsername(event.target.value)}
                placeholder='username enter'
            /><br />
            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder='password enter'
            /><br />
            <input
                type="password"
                value={verifyPassword}
                onChange={(event) => setVerifyPassword(event.target.value)}
                placeholder='Verify password enter'
            /><br />
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder='Name enter'
            /><br />
            <input
                type="date"
                value={dateOfBirth}
                onChange={(event) => setDateOfBirth(event.target.value)}
                placeholder='Date of birth enter'
            /><br />
            <input
                type="text"
                value={numberPhone}
                onChange={(event) => setNumberPhone(event.target.value)}
                placeholder='Number phone enter'
            /><br />
            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='Email enter'
            /><br />
            <button type="submit">Sign-up</button>
        </form>
    );
};

export default SignUp;
