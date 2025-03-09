import { Bar } from 'react-chartjs-2';
import Container from '../ui/container';
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
  Legend
);

const TrafficViolationsChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Traffic Violations by Type'
      }
    }
  };

  return (
    <Container className={`w-full h-auto p-4`}>
      <Bar options={options} data={data} />
    </Container>
  );
};

export default TrafficViolationsChart;