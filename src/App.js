import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Header/NavBar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Service from './templete/Service';
import MainMenu from './templete/MainMenu';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/Menu" element={<MainMenu />}></Route>
          <Route path="*" element={<h1>page not found</h1>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
