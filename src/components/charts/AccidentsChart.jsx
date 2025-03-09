import { Line } from 'react-chartjs-2';
import Container from '../ui/container';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AccidentsChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Accidents Report'
      }
    }
  };

  return (
    <Container className={`w-full h-auto p-4`}>
      <Line options={options} data={data} />
    </Container>
  );
};

export default AccidentsChart;