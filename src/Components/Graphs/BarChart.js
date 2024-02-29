// import axios from 'axios';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// const StackedBarChart = ({ data }) => {
//     return (
//         <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="value1" stackId="a" fill="#8884d8" />
//             <Bar dataKey="value2" stackId="a" fill="#82ca9d" />
//         </BarChart>
//     );
// };

// export default StackedBarChart;
// components/StackedBarChart.js
"use client";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const StackedBarChart = () => {
    const data = [
        {
            name: "Andy",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "Benny",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "Angela",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "Della",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "Cytheria",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "oliver",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "tony",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "Andy",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "Benny",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "john",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "alex",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "jack",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "petter",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
        {
            name: "adam",
            pending: 0,
            inprogress: 0,
            Complete: 0,
        },
    ];
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pending" barSize={40} stackId="a" fill="#40A9FF" />
                <Bar dataKey="inprogress" barSize={40} stackId="a" fill="#91D5FF" />
                <Bar dataKey="Complete" barSize={40} stackId="a" fill="#E6F7FF" />
            </BarChart>
        </ResponsiveContainer>
    );
};
;
export default StackedBarChart;