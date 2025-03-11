import { Line } from 'react-chartjs-2';
import Container from '../ui/container';
import { useState,useEffect,useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  layouts,
  elements,

} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels,
  annotationPlugin
);

const AccidentsChart = ({ data }) => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.ctx;
      const gradientFill = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradientFill.addColorStop(0, "rgba(255, 99, 132, 0.6)"); // Darker at the top
      gradientFill.addColorStop(1, "rgba(255, 99, 132, 0)"); // Fades to transparent
      setGradient(gradientFill);
    }
  }, []);
  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    layout: {
      padding: 0
    },
    scales: {
      x: {
        // display:false,
        border:{
          display:false,
          // dash:[6,6]
        },
        grid:{
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
        border:{
          display:false,
          // dash:[6,6]
        },
        grid:{
          display: false,
          color:"#F7F6F7",
          drawTicks:false,
        },
        ticks:{
          display:false,
          padding: 0,
        }

      }
    },
    plugins: {
      datalabels: {
        display: false, // Show only on hover
      },
      filler: {
        propagate: true
      },
      legend: {
        display:false,
      },
      title: {
        display: false,
      }
    },
    elements:{
      point:{
        backgroundColor:"#5654D4",
        borderColor:"#ffffff",
        borderWidth:2
      }
    }
  };

  return (
    <Container className="w-full h-auto px-6 py-4">
      <div className='w-full h-auto flex flex-col justify-center items-center gap-4'>
        <h1 className='w-full ha-uto text-start text-zinc-900 font-semibold text-xl'>Montly Alerts</h1>
        <div className='w-full h-auto flex flex-row justify-between items-center '>
          <div className='w-auto h-auto flex flex-col justify-center items-start gap-1'>
            <div className='w-auto h-auto flex flex-row justify-start items-center py-[2px] gap-4'>
              <p className='text-4xl/[38px] text-zinc-900 tracking-widest font-semibold'>19</p>
            </div>
            <div className='w-auto h-auto flex flex-row justify-start items-center gap-3'>
              <p className='text-start text-sm/[18px] text-zinc-500 font-semibold'>Total Alerts</p>
              <div className='w-auto h-auto flex flex-row justify-start items-center gap-1'>
                <TrendingUp className='w-[18px]! h-[18px]! stroke-2! text-green-500'/>
                <p className='text-[13px]  text-green-500 font-semibold'>1.25%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[200px] flex flex-col justify-center items-center'>
          <Line ref={chartRef}  options={options} data={data}/>
        </div>
      </div>
    </Container>
  );
};

export default AccidentsChart;
