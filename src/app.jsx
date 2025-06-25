import { Route, Routes } from "react-router";
import AppHome from "./pages/AppHome";
import AppLogin from "./pages/AppLogin";
import AppRegister from "./pages/AppRegister";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <main style={{ background: "#f6f6f6b5" }}>
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