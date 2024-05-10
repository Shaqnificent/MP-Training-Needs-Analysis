import React, { useEffect, useRef } from 'react';
import './chart.scss'

const Chart = ({ charts }) => {
    const chartRefs = useRef(charts.map(() => React.createRef()));

    useEffect(() => {
        const loadGoogleCharts = () => {
            const script = document.createElement('script');
            script.src = 'https://www.gstatic.com/charts/loader.js';
            script.onload = () => {
                google.charts.load('current', { packages: ['corechart'] });
                google.charts.setOnLoadCallback(drawAllCharts);
            };
            document.body.appendChild(script);
        };

        const drawAllCharts = () => {
            charts.forEach((chart, index) => {
                const data = google.visualization.arrayToDataTable(chart.data);
                const chartConstructor = getChartConstructor(chart.type);
                const newChart = new chartConstructor(chartRefs.current[index].current);
                newChart.draw(data, chart.options);
            });
        };

        const getChartConstructor = (type) => {
            switch (type) {
                case 'BarChart':
                    return google.visualization.BarChart;
                case 'PieChart':
                    return google.visualization.PieChart;
                default:
                    return google.visualization.ColumnChart;
            }
        };

        if (!window.google) {
            loadGoogleCharts();
        } else {
            drawAllCharts();
        }
    }, [charts]);

    return (
        <div className='reportsContainer'>
            {charts.map((chart, index) => (
                <div key={index} ref={chartRefs.current[index]} style={{height: '400px' }}></div>
            ))}
        </div>
    );
};

export default Chart;
