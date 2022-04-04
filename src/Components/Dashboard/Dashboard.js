import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';



const Dashboard = () => {
    // make extra data
    const data01 = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        }
    ];
    const data02 = [
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    // data 
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center m-3'>
            {/* this is chart no 01 */}
            <div className='mt-10 text-center mx-auto w-auto'>
                <p className='text-lg font-bold  border-b-4 border-purple-400 mb-3 inline-block text-purple-600'>Investment & Revenue</p>
                <LineChart width={350} height={250} data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />

                </LineChart>
            </div>
             {/* this is chart no 04 */}
             <div className='mt-10 text-center mx-auto w-auto'>
                <p className='text-lg font-bold  border-b-4 border-green-400 mb-3 inline-block text-green-600'>Compare Half of Month</p>
                <PieChart width={350} height={250}>
                    <Pie data={data01} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data02} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>
            {/* this is chart no 02 */}
            <div className='mt-10 text-center mx-auto w-auto'>
                <p className='text-lg font-bold  border-b-4 border-purple-400 mb-3 inline-block text-purple-500'>Per Sell Investment & Revenue</p>
                <BarChart width={350} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sell" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                </BarChart>
            </div>
            {/* this is chart no 03 */}
            <div className='mt-10 text-center mx-auto w-auto'>
                <p className='text-lg font-bold  border-b-4 border-purple-400 mb-3 inline-block text-purple-600'>Revenue of Month</p>
                <LineChart width={350} height={250} data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <Line type="monotone" dataKey="investment" stroke="#8884d8" /> */}
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />

                </LineChart>
            </div>
           

        </div>
    );
};

export default Dashboard;