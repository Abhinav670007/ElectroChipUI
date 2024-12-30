import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
       
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        </Routes>
       
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
