import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
       
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
       
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
