import React from 'react';
import './App.css';
import { Messages } from './components/messages/Messages';
import { Loading } from './components/loading/Loading';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import { Context } from './context/';

function App() {
  return (
    <Context>
      <Loading />
      <Header />
      <Main />
      <Footer />
      <Messages />
    </Context>
  );
}
//
export default App;
