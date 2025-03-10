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
    scales: {
      x: {
        display:false
      },
      y: {
        border:{
          display:false,
          // dash:[6,6]
        },
        grid:{
          color:"#F7F6F7",
          drawTicks:false
        },
        ticks:{
          display:false,
          padding: 16,
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
        display: true,
        text: 'Monthly Accidents Report'
      }
    }
  };

  return (
    <Container className="w-full h-auto p-4">
      <Line ref={chartRef}  options={options} data={data}/>
    </Container>
  );
};

export default AccidentsChart;
