import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from './components/header';
import Main from './components/main';

import './styles/index.scss';

export const App: FC = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Main />
    </>
  );
};
