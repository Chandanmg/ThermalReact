
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './screens/Dashboard';
import DashboardMeasurement from './screens/Dashboard-measurement';
import Settings from './screens/Settings';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/dashboardmeasurement' element={<DashboardMeasurement />}></Route>
                <Route path='/settings' element={<Settings />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
