// pages/user-list.js
import React from 'react';

const UserListPage = () => {
    // Retrieve user data from local storage
    const isBrowser = typeof window !== 'undefined';
    const userData = isBrowser ? JSON.parse(localStorage.getItem('userData')) || [] : [];

    return (
        <div>
            <h1>User Data List</h1>
            <ul>
                {userData.map((data, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {data.name}, <strong>Role:</strong> {data.role}, <strong>Start Date:</strong>{' '}
                        {data.startDate}, <strong>End Date:</strong> {data.endDate}, <strong>Comment:</strong> {data.comment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserListPage;
