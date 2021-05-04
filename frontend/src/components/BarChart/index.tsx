import Chart from 'react-apexcharts'

const BarChart = () =>{

    const options ={
        plotOptions: {
            bar: {
                horizontal: true,
            }
        }
    }

    const mockData = {
        labels:{
            categories: ['Anakin','Barry','Aleen','pou','olivia']
        },

        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.5, 62.2, 45.6, 78.5]
            }
        ]
    }


    return (
        <Chart 
          options={{... options, xaxis: mockData.labels}}
          series={mockData.series}
          type="bar"
          height="240"
        />
    );
}

export default BarChart;