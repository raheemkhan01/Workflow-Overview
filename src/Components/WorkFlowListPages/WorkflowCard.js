import React from 'react'

const WorkflowCard = ({ title, onSelect }) => {
    const handleClick = () => {
      if (onSelect) {
        onSelect(title); // Pass the title as an identifier
      }
    };
  
    return (
      <section className="relative flex flex-col w-[256px] h-[316px] justify-between text-center gap-3 shadow-lg rounded-lg border border-slate-50 p-3 bg-white">
        <p className="text-blue-600 font-sans text-sm not-italic font-semibold leading-7">
          {title} WorkFlow
        </p>
        <p className="text-black font-sans text-sm not-italic font-bold leading-normal"></p>
        <Button
          type="default"
          className="text-blue-500 font-roboto font-medium text-base leading-6 border-none"
          onClick={handleClick}
        >
          Select
        </Button>
      </section>
    );
  };

export default WorkflowCard
