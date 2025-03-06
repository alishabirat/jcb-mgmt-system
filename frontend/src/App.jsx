import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Sidebar />  
    </Router>
  );
}

export default App;
