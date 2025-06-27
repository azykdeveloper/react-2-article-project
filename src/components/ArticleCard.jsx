import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "../service/axios";
import { getArticlesStart, getArticlesSuccess } from "../slice/article";

function ArticleCard({ article }) {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function getArticles() {
    dispatch(getArticlesStart()); // Reset articles before fetching new ones
    try {
      const response = await axios.get("/articles");
      dispatch(getArticlesSuccess(response.data.articles));
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }

  async function articleDelete(slug) {
    try {
      const response = await axios.delete(`/articles/${slug}`);
      if (response.status === 200) {
        getArticles(); // Refresh articles after deletion
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  }

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.description}</p>
        </div>

        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button onClick={() => navigate(`/article/${article.slug}`)} type="button" className="btn btn-sm text-primary">
                View
              </button>
              
              {article.author.username === auth.user?.username && (
                <div>
                  <button onClick={() => navigate(`/article/${article.slug}/edit`)} type="button" className="btn btn-sm text-secondary">
                    Edit
                  </button>
                  <button onClick={() => articleDelete(article.slug)} type="button" className="btn btn-sm text-danger">
                    Delete
                  </button>
                </div>
              )}
            </div>
            <small className="text-body-secondary">
              {new Date(article.createdAt).toLocaleDateString()}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
