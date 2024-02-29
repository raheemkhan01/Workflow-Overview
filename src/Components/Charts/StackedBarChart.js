
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

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const StackedBarChart = () => {
    const data = [
        {
            name: 'Andy',
            pending: 5,
            inprogress: 24,
            Complete: 8,
        },
        {
            name: 'Benny',
            pending: 9,
            inprogress: 10,
            Complete: 7,
        },
        {
            name: 'Angela',
            pending: 10,
            inprogress: 14,
            Complete: 8,
        },
        {
            name: 'Della',
            pending: 19,
            inprogress: 10,
            Complete: 12,
        },
        {
            name: 'Cytheria',
            pending: 10,
            inprogress: 14,
            Complete: 8,
        },
        {
            name: 'oliver',
            pending: 20,
            inprogress: 5,
            Complete: 8,
        },
        {
            name: 'tony',
            pending: 19,
            inprogress: 10,
            Complete: 12,
        },
        {
            name: 'Andy',
            pending: 5,
            inprogress: 24,
            Complete: 8,
        },
        {
            name: 'Benny',
            pending: 9,
            inprogress: 10,
            Complete: 7,
        },
        {
            name: 'john',
            pending: 10,
            inprogress: 14,
            Complete: 8,
        },
        {
            name: 'alex',
            pending: 19,
            inprogress: 10,
            Complete: 12,
        },
        {
            name: 'jack',
            pending: 10,
            inprogress: 14,
            Complete: 8,
        },
        {
            name: 'petter',
            pending: 20,
            inprogress: 5,
            Complete: 8,
        },
        {
            name: 'adam',
            pending: 19,
            inprogress: 10,
            Complete: 12,
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
                <Bar dataKey="pending" barSize={40} stackId="a" fill="#006D75" />
                <Bar dataKey="inprogress" barSize={40} stackId="a" fill="#13C2C2" />
                <Bar dataKey="Complete" barSize={40} stackId="a" fill="#87E8DE" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedBarChart;
