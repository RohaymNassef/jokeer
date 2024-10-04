import React from 'react';
import "./App.css";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Anser from './pages/Anser/Anser';
import Service from './pages/Services/Service';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<Header/>}/>
          <Route path='/anser' element = {<Anser/>}/>
          <Route path='/service' element = {<Service/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
