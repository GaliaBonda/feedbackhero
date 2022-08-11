import React from 'react';
import './app.scss';
import Advantages from './components/Advantages/Advantages';
import Clients from './components/Clients/Clients';
import Copyright from './components/Copyright/Copyright';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Main from './components/Main/Main';
import Pricing from './components/Pricing/Pricing';
import Service from './components/Service/Service';
import SignUp from './components/SignUp/SignUp';
import Use from './components/Use/Use';

function App() {
  return (
    <div className="app">
      <Header />
      
        <Main />
        <Features />
      <Use />
        <Advantages />
      <Clients />
        <Pricing />
      <Info />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
