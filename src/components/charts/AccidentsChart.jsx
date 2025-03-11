import { Line } from 'react-chartjs-2';
import Container from '../ui/container';
import { useState,useEffect,useRef } from 'react';
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
          display: false,
          padding: 8,
        }
      },
      y: {
        border:{
          display:false,
          // dash:[6,6]
        },
        grid:{
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
      filler: {
        propagate: true
      },
      legend: {
        display:false,
        position: 'top',
      },
      title: {
        display: false,
      }
    }
  };

  return (
    <Container className="w-full h-auto px-6 py-4">
      <div className='w-full h-auto flex flex-col justify-center items-center gap-4'>
        <h1 className='w-full ha-uto text-start text-zinc-900 font-semibold text-xl'>Montly Alerts Report</h1>
        <div className='w-full h-auto flex flex-row justify-between items-center '>
          <div className='w-auto h-auto flex flex-col justify-center items-start'>
            <div className='w-auto h-auto flex flex-row justify-start items-center py-[2px] gap-3'>
              <p className='text-4xl/[38px] text-zinc-900 tracking-widest font-semibold'>19</p>
              <div className='w-12 h-12 flex flex-col justify-center items-center'>
              </div>
            </div>
            <div className='w-auto h-auto flex flex-row justify-start items-center py-[2px] gap-3'>
              <p className='text-start text-sm text-zinc-500 font-semibold'>Total Alerts</p>
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
