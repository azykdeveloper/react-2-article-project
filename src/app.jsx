import { Route, Routes } from "react-router";
import AppHome from "./components/AppHome";
import AppLogin from "./components/AppLogin";
import AppRegister from "./components/AppRegister";

function App() {
  return ( 
    <>
      <h1 className="bg-success text-light">Hello, World!</h1>
      
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/login" element={<AppLogin />} />
        <Route path="/register" element={<AppRegister />} />
      </Routes>
    </>
   );
}

export default App;