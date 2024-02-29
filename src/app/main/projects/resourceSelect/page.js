import React from 'react';
import MemberSection from './select';

const members = [
  { id: 1, name: 'Olivia Rhye', role: 'Product Manager' },
  { id: 2, name: 'Phoenix Baker', role: 'Product Manager' },
  { id: 3, name: 'Lori Bryson', role: 'Product Manager' },
  { id: 4, name: 'Orlando Diggs', role: 'Product Manager' },
  { id: 5, name: 'Kate Morrison', role: 'Product Manager' },
  { id: 6, name: 'John Doe', role: 'UI Designer' },
  { id: 7, name: 'Jane Smith', role: 'UI Designer' },
];

const ProductManagerSection = () => {
  const productManagers = members.filter((member) => member.role === 'Product Manager');
  return <MemberSection members={productManagers} title="Product Managers" />;
};

const UIDesignerSection = () => {
  const uiDesigners = members.filter((member) => member.role === 'UI Designer');
  return <MemberSection members={uiDesigners} title="UI Designers" />;
};

const CreateProject = () => {
  return (
    <div>
      <ProductManagerSection />
      <UIDesignerSection />
    </div>
  );
};

export default CreateProject;