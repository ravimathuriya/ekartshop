import './App.css';

import Cart from './Components/Cart';
import NavNew from './Components/NavNew';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
       <NavNew />
       <Routes>
        <Route exact path="cart" element={<Cart/>}/>
         </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
