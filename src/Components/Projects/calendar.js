"use client"
import React, { useState } from 'react';
import { DatePicker} from 'antd';
;
const { RangePicker } = DatePicker;
const App = () => {
    
  return (
    
      <RangePicker size={12} 
      onChange ={(values)=>{

        endDate(values.map(item=>{
          return moment(item).format('YYYY-DD-MM')
        }))
      }}
      />
  
  );
};
export default App;