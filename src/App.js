import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import AppProvider from './context';

function App() {
  return (
    <AppProvider>     
     <Header />
     <Main />
     <Footer />
    </AppProvider>
  );
}
//
export default App;
