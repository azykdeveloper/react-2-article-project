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
import { getArticlesStart, getArticlesSuccess } from "./slice/article";

function App() {
  const dispatch = useDispatch();

  async function getUser() {
    try {
      const response = await axios.get("/user");
      console.log("User data:", response.data);
      dispatch(authSuccess(response.data.user));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  async function getArticles() {
    dispatch(getArticlesStart()); // Reset articles before fetching new ones
    try {
      const response = await axios.get("/articles");
      console.log("Articles data:", response.data);
      dispatch(getArticlesSuccess(response.data.articles));
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }

  useEffect(() => {
    // If token exists, fetch user data
    const token = getItem("token");
    if (token) getUser();

    // Fetch articles on app load
    getArticles();
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