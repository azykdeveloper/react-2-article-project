import { Route, Routes } from "react-router";
import AppHome from "./pages/AppHome";
import AppLogin from "./pages/AppLogin";
import AppRegister from "./pages/AppRegister";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <main style={{ backgroundColor: "#f8f9fa" }}>
      <AppNavbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/login" element={<AppLogin />} />
          <Route path="/register" element={<AppRegister />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;