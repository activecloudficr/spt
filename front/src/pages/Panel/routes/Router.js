import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import HomePacient from '../pages/HomePacient/HomePacient';

const RouterPanel = () => {
  return (
    <div>
      <Routes>
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="/" element={<HomePacient />} />
        <Route path="*" element={<div />} />
      </Routes>
    </div>
  );
};

export default RouterPanel;