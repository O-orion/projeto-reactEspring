import Chart from 'react-apexcharts'

const DonutChart = () =>{
    const mockData = {
        series: [47785,79998,455569,48888,999990],
        labels: ['Analo','barry','maria','vitor','florinda']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
          options={{... options, labels: mockData.labels}}
          series={mockData.series}
          type="donut"
          height="240"
        />
    );
}

export default DonutChart;