import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import RouterPanel from '../pages/Panel/routes/Router';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/painel/*" element={<RouterPanel />} />
        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;