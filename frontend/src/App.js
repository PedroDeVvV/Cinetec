import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./protectedRouter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Pages
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home";
import Ator from "./pages/Ator/Ator"
import Diretor from "./pages/Diretor/Diretor"
import Genero from "./pages/Genero/Genero"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/" element={<Home />} />
            <Route path="/ator" element={<Ator />} />
            <Route path="/diretor" element={<Diretor />} />
            <Route path="/genero" element={<Genero />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
