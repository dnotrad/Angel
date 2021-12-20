import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';
import Password from './components/Password';

import './styles/index.scss';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Password />} />
        <Route path="/mint" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
