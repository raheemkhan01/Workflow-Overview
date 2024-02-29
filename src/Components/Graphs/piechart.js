import React, { useEffect, useState } from "react";
import { Progress, Space } from "antd";
import axios from 'axios';
import api from "@/api";


const CircularProgress = () => {
    const [taskCompleted, setTaskCompleted] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/workflow'); // Replace with your API endpoint
                const data = response.data;
                setTaskCompleted(data.task_completed);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Space wrap>
            <Progress
                type="circle"
                percent={taskCompleted}
                format={(percent) => `${percent}%`}
                strokeWidth={13}
                size={120}
            />
        </Space>
    );
};

export default CircularProgress;
