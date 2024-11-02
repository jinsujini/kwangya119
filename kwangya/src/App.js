import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main';
import None from './components/None';
import Now from './components/Now';
import My from './components/my/My';


function App() {
  return (
    <BrowserRouter>
      <div className='container'>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/now' element={<Now />} />
          <Route path='/my' element={<My />} />
          <Route path='/none' element={<None />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
