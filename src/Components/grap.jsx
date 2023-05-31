import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchHistory } from '../helpers/HistoryFetch';
import '../styles/grap.css';

export function Graph() {
    const [historyData, setHistoryData] = useState(null);

    const fetchDataHistory = async () => {
        try {
            const data = await fetchHistory();
            setHistoryData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (!historyData) {
        fetchDataHistory();
    }

    const chartData = historyData
        ? {
            labels: historyData.prices.map(([timestamp]) =>
                new Date(timestamp).toLocaleDateString()
            ),
            datasets: [
                {
                    data: historyData.prices.map(([, price]) => price),
                    borderColor: 'rgba(104, 107, 127, 1)',
                    backgroundColor: 'rgba(104, 107, 127, 0.2)',
                    fill: true,
                },
            ],
        }
        : null;

    return (
        <div className='graphContainer'>
            <h2>Cripto</h2>
            {chartData ? (
                <Bar className='chart' data={chartData} />
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
}


