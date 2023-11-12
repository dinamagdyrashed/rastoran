import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Header/NavBar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Service from './templete/Service';
import MainMenu from './templete/MainMenu';
import Menu from './food/Menu';
import MainAbout from './templete/MainAbout';
import Booking from './templete/Booking';
import OurTeam from './templete/OurTeam';
import Testimotion from './templete/Testimotion';
import Contact from './templete/Contact';
import React, { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = 'Restaron';
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Menu />} />
            <Route path='breackfast' element={<Menu />} />
            <Route path='launch' element={<Menu />} />
            <Route path='dinner' element={<Menu />} />
          </Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/Menu" element={<MainMenu />}>
            <Route index element={<Menu />} />
            <Route path='breackfast' element={<Menu />} />
            <Route path='launch' element={<Menu />} />
            <Route path='dinner' element={<Menu />} />
          </Route>
          <Route path='/about' element={<MainAbout />}></Route>
          <Route path='/booking' element={<Booking />} />
          <Route path='/team' element={<OurTeam />} />
          {/* <Route path='/team' element={<OurTeam />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/testimotion' element={<Testimotion />} />
          <Route path="*" element={<h1>page not found</h1>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
