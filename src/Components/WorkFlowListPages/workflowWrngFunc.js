// SYED JOHAR ALI SHAH

import React, { useState } from "react";
import ProcurementWorkflowComp from "./ProcurementWorkflow";

const ParentComponent = () => {
  const [components, setComponents] = useState([
    // initial components
    // ...
  ]);

  const handleRemoveComponent = (index) => {
    // Remove the component at the specified index
    const updatedComponents = [...components];
    updatedComponents.splice(index, 1);
    setComponents(updatedComponents);
  };

  return (
    <div>
      {components.map((component, index) => (
        <ProcurementWorkflowComp
          key={index}
          onRemove={() => handleRemoveComponent(index)}
        />
      ))}
    </div>
  );
};

export default ParentComponent;
