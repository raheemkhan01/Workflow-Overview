'use client'
import React, { useState, useEffect } from 'react';
 
const useProject = () => {
  
  // Check if we are in a browser environment
  const isBrowser = typeof window !== 'undefined';
 
  // Check if there is any data in localStorage for 'project' key
  const storedProject =isBrowser ? JSON.parse(localStorage.getItem('project')) || [] : [];
 
  const [project, setProject] = useState(storedProject);
 
  useEffect(() => {
    // Update localStorage whenever the 'project' state changes
    localStorage.setItem('project', JSON.stringify(project));
  }, [project]);
 
  return [project, setProject];
};
 
export default useProject;
