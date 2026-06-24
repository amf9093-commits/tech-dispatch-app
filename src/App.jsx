import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Splash from './pages/Splash';
import Login from './pages/Login';
import TechDashboard from './pages/tech/TechDashboard';
import JobMatching from './pages/tech/JobMatching';
import MapPage from './pages/tech/MapPage';
import TechProfile from './pages/tech/TechProfile';
import WorkReport from './pages/tech/WorkReport';
import IncomeStats from './pages/tech/IncomeStats';
import AdminDashboard from './pages/admin/AdminDashboard';
import DispatchMgmt from './pages/admin/DispatchMgmt';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import RepairRequest from './pages/customer/RepairRequest';
import Announcements from './pages/Announcements';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/announcements" element={<Announcements />} />
          
          {/* Technician Routes */}
          <Route path="/tech" element={<TechDashboard />} />
          <Route path="/tech/matching" element={<JobMatching />} />
          <Route path="/tech/map" element={<MapPage />} />
          <Route path="/tech/profile" element={<TechProfile />} />
          <Route path="/tech/report" element={<WorkReport />} />
          <Route path="/tech/income" element={<IncomeStats />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dispatch" element={<DispatchMgmt />} />

          {/* Customer Routes */}
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/customer/request" element={<RepairRequest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
