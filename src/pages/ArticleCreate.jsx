import { NavLink, useNavigate } from "react-router";
import ArticleForm from "../components/ArticleForm";
import axios from "../service/axios";

function ArticleCreate() {
  const navigate = useNavigate();
  async function createArticle(article) {
    try {
      const response = await axios.post("/articles", {article});
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <div className="container " style={{ padding: "100px 0" }}>
      <h1 className="text-center mb-4">Create New Article</h1>
      <div className="text-center mb-4">
        <NavLink to={"/"} className="btn text-primary">
          ← Back to Home
        </NavLink>
      </div>

      <ArticleForm onSubmit={createArticle} />
    </div>
  );
}

export default ArticleCreate;
