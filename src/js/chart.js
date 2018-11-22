import React from 'react';
import '../scss/main.scss';
import {HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis/es";


const Chart = ({ data }) => {
    const priceChartData = [];
    const openChartData = [];
    const closeChartData = [];

    const getDay = (timestamp) => {
        var time = new Date(timestamp * 1000);
        var month = time.getMonth() + 1;
        var day = time.getDate();
        var year = time.getFullYear();

        return month + "/" + day + "/" + year

    };

    data.map(el => {
        let y = (el.low + el.high) / 2;
        let x = new Date(getDay(el.time));
        priceChartData.push({x, y});
        y = el.close;
        closeChartData.push({x,y});
        y = el.open;
        openChartData.push({x,y})
        return null
    });

    return (
        <XYPlot xType="time" height={300} width={800}>
            <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
            <VerticalGridLines style={{stroke: '#B7E9ED'}} />
            <LineSeries
                className="fourth-series"
                data={priceChartData}
                style={{
                    strokeLinejoin: 'round',
                    strokeWidth: 4
                }}
            />
            <LineSeries data={openChartData} />
            <LineSeries data={closeChartData} />
            <XAxis
                title="Date"
                style={{
                    line: {stroke: '#ADDDE1'},
                    ticks: {stroke: '#ADDDE1'},
                    text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                }}
            />
            <YAxis />
        </XYPlot>
    )


}

export { Chart }