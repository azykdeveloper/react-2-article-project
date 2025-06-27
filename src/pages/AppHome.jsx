import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard";
import { useNavigate } from "react-router";
import { getArticlesStart, getArticlesSuccess } from "../slice/article";
import { useEffect } from "react";
import axios from "../service/axios";

function AppHome() {
  const authSlice = useSelector((state) => state.auth);
  const articleSlice = useSelector((state) => state.article);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    getArticles();
  }, []);

  return (
    <section style={{ paddingTop: "80px" }}>
      <div className="row py-lg-5 text-center">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Maqolalar Loyihasi</h1>
          <p className="lead text-body-secondary">
            Ushbu loyiha maqolalarni yozish, o'qish va boshqarish uchun
            mo'ljallangan. Foydalanuvchilar o'z maqolalarini qo'shishlari va
            boshqalar bilan bo'lishishlari mumkin. Loyihada React.js va Redux toolkit
            texnologiyalari ishlatilgan.
          </p>
          <p>
            {authSlice.isAuthenticated && (
              <button
                onClick={() => navigate("/article/create")}
                className="btn btn-primary"
              >
                <i className="bi bi-feather"></i> Maqola yozish
              </button>
            )}
          </p>
        </div>
      </div>

      {articleSlice.loading ? (
        <div className="text-center py-3">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articleSlice.articles.map((article) => (
            <div className="col" key={article.slug}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default AppHome;
