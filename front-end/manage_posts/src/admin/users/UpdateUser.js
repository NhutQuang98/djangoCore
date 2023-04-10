import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const UpdateUser = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const dateofbirth = searchParams.get('dateofbirth');

    const [userName, setUsername] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${userName}, 
                    Name: ${name},
                    Date of birth: ${dateOfBirth},
                    Number phone: ${numberPhone}
                    Email: ${email}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update User</h2>
            <input
                type="text"
                value={`user${id}`}
                onChange={(event) => setUsername(event.target.value)}
                placeholder='username enter'
            /><br />
            <input
                type="text"
                value={`member ${id}`}
                onChange={(event) => setName(event.target.value)}
                placeholder='Name enter'
            /><br />
            <input
                type="date"
                value={dateofbirth}
                onChange={(event) => setDateOfBirth(event.target.value)}
                placeholder='Date of birth enter'
            /><br />
            <input
                type="text"
                value='123456789'
                onChange={(event) => setNumberPhone(event.target.value)}
                placeholder='Number phone enter'
            /><br />
            <input
                type="email"
                value={`user${id}@gmail.com`}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='Email enter'
            /><br />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateUser;
