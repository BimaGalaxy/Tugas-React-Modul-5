import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pegawai from "./pages/pegawai";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Pegawai/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
