import React from 'react';
import './app.scss';
import Advantages from './components/Advantages/Advantages';
import Benefits from './components/Benefits/Benefits';
import Clients from './components/Clients/Clients';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Pricing from './components/Pricing/Pricing';
import Service from './components/Service/Service';
import SignUp from './components/SignUp/SignUp';
import Use from './components/Use/Use';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Features />
      <Use />
      <Benefits />
      <Advantages />
      <Clients />
      <Pricing />
      <Service />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;