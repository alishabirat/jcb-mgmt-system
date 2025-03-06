import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
