"use client"

import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import { selectUser } from "@/Context/slice";

const users = [
  {
    key: 'alex@example.com',
    name: 'Alex Ben',
    email: 'alex.benn@gmail.com',
    avatarSrc: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg',
    lastActive: 'Before 40 Min',
    status: 'Project Manager',
  },
  {
    key: 'angela@example.com',
    name: 'Angela Moss',
    email: 'angela.moss@gmail.com',
    avatarSrc: 'https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg',
    lastActive: 'Online',
    status: 'Project Manager',
  },
  {
    key: 'della@example.com',
    name: 'Della Samantha',
    email: 'della.samatha@gmail.com',
    avatarSrc: 'https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_1280.jpg',
    lastActive: 'Just Now',
    status: 'Project Manager',
  },
  {
    key: 'jenner@example.com',
    name: 'Jenner',
    email: 'jenner.01@gmail.com',
    avatarSrc: 'https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_1280.jpg',
    lastActive: '22/11/2023',
    status: 'Project Manager',
  },
];


  const DisplayUsers = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const dispatch = useDispatch();


    const handleUserSelection = (userKey) => {
      if (selectedUsers.includes(userKey)) {
        setSelectedUsers((prevSelected) => prevSelected.filter((key) => key !== userKey));
      } else {
        setSelectedUsers((prevSelected) => [...prevSelected, userKey]);
      }
    };

    const handleAddButtonClick = () => {
      console.log("Selected Users:", selectedUsers);
        };




  return (
    <div className='flex flex-col gap-4 bg-white p-5 w-[100%] h-[584px]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-slate-700 text-xl non-italic font-semibold leading-none'>List Of Project Managers</h1>
        <button className='flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white' onClick={handleAddButtonClick} >Add</button>
      </div>
      <div>
        <input className='border border-gray-500 bg-white rounded w-64 h-9 pl-3' placeholder='Search'></input>
      </div>
      <div className='w-[100%] border border-gray-400 p-5 flex justify-center rounded'>
        <div className='rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0'>
          <div className=' flex flex-col gap-5 mt-3 '>
            <div className='text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  '>
              <h1>Name</h1>
              <div className="flex w-[80%] justify-around pr-4 gap-24">
              <h1 className=''>Last Active</h1>
              <h1 className=' '>Role</h1>

              </div>
              </div>
            <div className='flex items-center justify-around'>
              <div className='border border-gray-200 w-[95%] '></div>
            </div>
          </div>
          {users.map((user) => (
          <div key={user.key}>
            <div className='flex items-center justify-start py-6 pr-20 pl-4 gap-40'>
              <div className="flex items-center gap-6 pl-3">
              <div><input type='checkbox' checked={selectedUsers.includes(user.key)}
                      onChange={() => handleUserSelection(user.key)}></input></div>
                <div className='flex items-center gap-3'>
                  <img className='rounded-full w-16 h-16' src={user.avatarSrc}></img>
                  <div>
                    <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">{user.name}</h1>
                    <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal">{user.email}</h3>
                  </div>
              </div>
                </div>
              <div className="flex justify-between w-[52%] ">
              <div className='text-sm non-italic font-normal leading-none text-blue-500'>{user.lastActive}</div>
                <div className='text-neutral-400 font-segoe-ui text-base font-normal'>{user.status}</div>
              </div>
            </div>
          </div>
           ))}
        </div>
      </div>
    </div>
  )
}

export default DisplayUsers



