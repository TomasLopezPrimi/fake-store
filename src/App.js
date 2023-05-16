import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Inicio from './components/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/store' element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
