import { Route, Routes } from "react-router";
import AppHome from "./pages/AppHome";
import AppLogin from "./pages/AppLogin";
import AppRegister from "./pages/AppRegister";
import AppNavbar from "./components/AppNavbar";
import { useEffect } from "react";
import axios from "./service/axios";
import { useDispatch } from "react-redux";
import { authSuccess } from "./slice/auth";
import { getItem } from "./utils/persistanceStorage";

function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const response = await axios.get("/user");
      console.log("User data:", response.data);
      dispatch(authSuccess(response.data.user));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) getUser();
  }, []);   

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