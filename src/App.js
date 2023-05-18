import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Inicio from './components/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/store' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
