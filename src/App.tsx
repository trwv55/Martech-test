import React, { useState } from 'react';
import './scss/app.scss';
import StartPage from './pages/StartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<StartPage modalOpen={modalOpen} setModalOpen={setModalOpen} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
