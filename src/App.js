import './scss/app.scss';
import StartPage from './pages/StartPage';
import ModalRegister from './pages/ModalRegister';
import Success from './pages/Success';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StartPage />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/register" element={<ModalRegister />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
