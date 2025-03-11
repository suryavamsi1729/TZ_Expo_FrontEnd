import { Bar } from 'react-chartjs-2';
import Container from '../ui/container';
import { TrendingUp } from 'lucide-react';
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
  annotationPlugin
);

const TrafficViolationsChart = ({ data }) => {
  const dataValues = [65, 45, 30, 25, 55]; // Sample data
  const average = dataValues.reduce((sum, val) => sum + val, 0) / dataValues.length; // Calculate average

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    elements: {
      bar: {
        borderRadius: 20, 
        borderSkipped:false,// Rounds all sides of the bars
      },
    },  
    scales: {
      x: {
        border:{
          display:true,
          z: -5
        },
        grid:{
          offset: true,
          display: false,
          color:"#F7F6F7",
          drawTicks:false
        },
        ticks:{
          display: true,
          padding: 8,
        }
      },
      y: {
        offset:true,
        border:{
          display:false,
        },
        grid:{
          display:false,
          drawTicks:false,
        },
        ticks:{
          display:false,
          padding: 0,
        }

      }
    },
    plugins: {
      annotation: {
        annotations: {
          avgLine: {
            type: "line",
            yMin: average, // Position at the average value
            yMax: average,
            borderColor: "#737373",
            borderWidth: 2,
            borderDash: [2, 5], // Dotted line (adjust numbers for spacing)
            label: {
              content: `Avg: ${average}`,
              enabled: true,
              position: "end",
              backgroundColor: "red",
              color: "black",
              padding: 0,
            },
          },
        },
      },
      datalabels: {
        display: (context) => context.chart.isDatasetVisible(context.datasetIndex) && context.active, // Show only on hover
        anchor: "end", // Position at the top
        align: "start", // Align text slightly away from bar
        offset: 8,
        color: "white", // Ensure visibility inside bars
        font: {
          weight: "bold",
          size: 14,
        },
      },
      legend: {
        display:false,
      },
      title: {
        display: false,
      },
      tooltip:{
        enabled:false,
      }
    }
  };

  return (
    <Container className="w-full h-auto px-6 py-4">
      <div className='w-full h-auto flex flex-col justify-center items-center gap-4'>
        <h1 className='w-full ha-uto text-start text-zinc-900 font-semibold text-xl'>Alerts Per Cemara</h1>
        <div className='w-full h-auto flex flex-row justify-between items-center '>
          <div className='w-auto h-auto flex flex-col justify-center items-start gap-1'>
            <div className='w-auto h-auto flex flex-row justify-start items-center py-[2px] gap-4'>
              <p className='text-4xl/[38px] text-zinc-900 tracking-widest font-semibold'>19</p>
            </div>
            <div className='w-auto h-auto flex flex-row justify-start items-center gap-3'>
              <p className='text-start text-sm/[18px] text-zinc-500 font-semibold'>Avg Alerts</p>
              <div className='w-auto h-auto flex flex-row justify-start items-center gap-1'>
                <TrendingUp className='w-[18px]! h-[18px]! stroke-2! text-green-500'/>
                <p className='text-[13px]  text-green-500 font-semibold'>1.25%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[200px] flex flex-col justify-center items-center'>
          <Bar options={options} data={data} />
        </div>
      </div>
    </Container>
  );
};

export default TrafficViolationsChart;