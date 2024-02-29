"use client"

import React from "react";
import { Progress, Space } from "antd";
const PieCart = () => (
  <Space wrap>
    <Progress
      type="circle"
      percent={44}
      // success={{
      //   percent: 44,
      // }}
      format={(percent) => `${percent}%`}
      strokeWidth={6}
      size={100}
 
    />
  </Space>
);
export default PieCart;