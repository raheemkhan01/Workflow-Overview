"use client"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectMember, deselectMember } from '@/Context/Slices/resourseSelect';

const MemberSection = ({ members, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSelect = (memberId) => {
    if (isSelected(memberId)) {
      dispatch(deselectMember(memberId));
    } else {
      dispatch(selectMember(memberId));
    }
  };

  const isSelected = (memberId) => {
    const selectedMemberIds = useSelector((state) => state.member.selectedMemberIds);
    return selectedMemberIds.includes(memberId);
  };

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>{members.length} members</span>
      </div>
      {isOpen && (
        <ul>
          {members.map((member) => (
            <li key={member.id} onClick={() => handleSelect(member.id)}>
              {member.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MemberSection;