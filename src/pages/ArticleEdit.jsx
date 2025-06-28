import { NavLink, useNavigate, useParams } from "react-router";
import ArticleForm from "../components/ArticleForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArticleStart, getArticleSuccess } from "../slice/article";
import axios from "../service/axios";

function ArticleEdit() {
  const {slug} = useParams();
  const { article } = useSelector((state) => state.article);
  console.log("Article data in edit page:", article);
  const dispatch = useDispatch((state) => state.article);
  const navigate = useNavigate()

  async function getArticle() {
    dispatch(getArticleStart());
    try {
      const res = await axios.get(`/articles/${slug}`);
      dispatch(getArticleSuccess(res.data.article));
      // console.log("Article data:", res.data.article);
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  }

  useEffect(() => {
    getArticle();
  }, [slug, dispatch]);

  async function editArticle(article) {
    try {
      const response = await axios.put(`/articles/${slug}`, { article });
      if (response.status === 200) {
        navigate("/")
      }
    } catch (error) {
      console.error("Error updating article:", error);
    }
  }
    
  return (
    <div className="container " style={{ padding: "100px 0" }}>
      <h1 className="text-center mb-4">Edit Article</h1>
      <div className="text-center mb-4">
        <NavLink to={"/"} className="btn text-primary">
          ← Back to Home
        </NavLink>
      </div>

      <ArticleForm initialData={article} onSubmit={editArticle} />
    </div>
  );
}

export default ArticleEdit;
