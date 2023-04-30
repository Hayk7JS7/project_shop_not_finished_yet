import React from 'react';
import './App.css';
import  { data }  from './Pages/data/Data';
import About from './Pages/about/About';
import Home from './Pages/home/Home';
import Products from './Pages/products/Products'
import Sidebar from './Pages/sidebar/sidebar';
import { Route, Routes } from 'react-router-dom';
import Sugestion from './Pages/suggestions/Sugestion';



export const useItemContext = React.createContext()

function App() {
  return (
    <div className="App">
        <useItemContext.Provider value={{data}}>
          <Sidebar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path='/suggestion' element={<Sugestion/>}/>
          </Routes>
      </useItemContext.Provider>
    </div>
  );
}


export default App;
