import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import RouterPanel from '../pages/Panel/routes/Router';
import RouterPanelMedic from '../pages/PanelMedic/routes/Router';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/painel/*" element={<RouterPanel />} />
        <Route path="/painel/*" element={<RouterPanel />} />
        <Route path="/painelMedico/*" element={<RouterPanelMedic />} />
        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;