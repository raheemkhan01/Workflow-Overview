'use client'
// pages/add-user.js
import React from 'react';
// import UserForm from '../components/UserForm';
import UserForm from '@/Components/useCaseAddForm/useCaseAddForm';

const AddUserPage = () => {
    const saveData = (formData) => {
        // Save user data to local storage
        const data = JSON.parse(localStorage.getItem('userData')) || [];
        data.push(formData);
        // localStorage.setItem('userData', JSON.stringify(data));
    };

    return (
        <div>
            <h1>Add User Data</h1>
            <UserForm onSave={saveData} />
        </div>
    );
};

export default AddUserPage;
