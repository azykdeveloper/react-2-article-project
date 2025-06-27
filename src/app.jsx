import { Route, Routes } from "react-router";
import AppHome from "./pages/AppHome";
import AppLogin from "./pages/AppLogin";
import AppRegister from "./pages/AppRegister";
import ArticleDetail from "./pages/ArticleDetail";
import AppNavbar from "./components/AppNavbar";
import axios from "./service/axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authSuccess } from "./slice/auth";
import { getItem } from "./utils/persistanceStorage";
import { getArticlesStart, getArticlesSuccess } from "./slice/article";
import ArticleCreate from "./pages/ArticleCreate";
import ArticleEdit from "./pages/ArticleEdit";

function App() {
  const dispatch = useDispatch();

  async function getUser() {
    try {
      const response = await axios.get("/user");
      dispatch(authSuccess(response.data.user));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  async function getArticles() {
    dispatch(getArticlesStart()); // Reset articles before fetching new ones
    try {
      const response = await axios.get("/articles");
      dispatch(getArticlesSuccess(response.data.articles));
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }

  useEffect(() => {
    const token = getItem("token");
    if (token) getUser();

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
          <Route path="/article/:slug" element={<ArticleDetail />} />
          <Route path="/article/create" element={<ArticleCreate />} />
          <Route path="/article/:slug/edit" element={<ArticleEdit />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;