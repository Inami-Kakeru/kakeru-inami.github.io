import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../components/Menu';
import Salon from '../components/Salon';
import StaffDetail from '../components/StaffDetail';
import Recruit from '../components/Recruit';
import TestPage from '../components/TestPage';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/salon" element={<Salon />} />
      <Route path="/staff" element={<StaffDetail />} />
      <Route path="/recruit" element={<Recruit />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes; 