"use client"
import React, { useState } from 'react';
import { Tabs } from 'antd';
import Resourcepool from './Resourcepool'
import WorkFlowOverView from "@/Components/WorkFlowOverView/WorkFlowOverView"

const page = () => {
    const [size, setSize] = useState('small');
    const onChange = (e) => {
        setSize(e.target.value)
    }
    return (
        <div className='ml-3'>
            <div><h1 className='text-3xl font-semibold leading-snug tracking-normal text-left'>Workflow Management</h1></div>
            <div>
                <Tabs
                    defaultActiveKey="1"
                    size={size}
                    style={{
                        marginBottom: 32,
                        border: 'none',
                    }}
                    items={new Array(2).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        if (id == 1) {
                            return {
                                label: `Procurement Overview`,
                                key: id,
                                children: <WorkFlowOverView/>,
                            };
                        }
                        else if (id == 2) {
                            return {
                                label: `Resource pool`,
                                key: id,
                                children: <Resourcepool />,
                            };
                        }
                    })}
                />
            </div>
        </div>
    )
}

export default page