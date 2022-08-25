import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './views/Home/Home';

export default function App() {
  return (
    <React.StrictMode>
      {
        <>
          <BrowserRouter>
            <Routes>
              {
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={
                    <h1 className='text-center mt-5'>404 La pagina que estas buscando no esta disponible 😥</h1>
                  }></Route>
                </>
              }
            </Routes>
          </BrowserRouter>
        </>
      }
    </React.StrictMode>
  );
}
