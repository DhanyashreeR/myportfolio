import { Routes,Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Body from './component/Body';
import Home from './component/Home';
import Services from './component/Services';
import Skills from './component/Skills';

function App() {
  return (
    <>
     <div className='Navbar'>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Body' element={<Body/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Skills' element={<Skills/>}/>
    </Routes>
   
   </BrowserRouter>
   </div>
    </>
  );
}

export default App;
