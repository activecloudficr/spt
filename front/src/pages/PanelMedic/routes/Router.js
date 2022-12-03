import { Routes, Route } from 'react-router-dom';
import HomeMedic from '../pages/HomeMedic/HomeMedic';

const RouterPanelMedic = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMedic />} />
        <Route path="*" element={<div />} />
      </Routes>
    </div>
  );
};

export default RouterPanelMedic;