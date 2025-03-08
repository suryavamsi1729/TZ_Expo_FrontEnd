import './App.css';
import { RouterProvider } from 'react-router-dom';
import MainRouter from './routes/mainRouter';

function App() {
  return (
    <RouterProvider router={MainRouter} />
  );
}

export default App
