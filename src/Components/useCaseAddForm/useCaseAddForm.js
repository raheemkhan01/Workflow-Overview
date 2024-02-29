// components/UserForm.js
import React, { useState } from 'react';

const UserForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        startDate: '',
        endDate: '',
        comment: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        // Optionally, you can reset the form fields here
        setFormData({
            name: '',
            role: '',
            startDate: '',
            endDate: '',
            comment: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Role:
                <select name="role" value={formData.role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                </select>
            </label>
            <br />
            <label>
                Start Date:
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
            </label>
            <br />
            <label>
                End Date:
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Comment:
                <textarea name="comment" value={formData.comment} onChange={handleChange} required />
            </label>
            <br />
            <button type="submit">Save Data</button>
        </form>
    );
};

export default UserForm;
