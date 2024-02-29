// withSelectedData.js
import { useState } from 'react';

const withSelectedData = (WrappedComponent) => {
  const WithSelectedDataHOC = () => {
    const [selectedUserData, setSelectedUserData] = useState([]);

    const handleSelectedUserDataChange = (newData) => {
      setSelectedUserData(newData);
    };

    return (
      <WrappedComponent
        selectedUserData={selectedUserData}
        handleSelectedUserDataChange={handleSelectedUserDataChange}
      />
    );
  };

  return WithSelectedDataHOC;
};

export default withSelectedData;
