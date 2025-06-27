import { NavLink } from "react-router";
import ArticleForm from "../components/ArticleForm";

function ArticleEdit() {
  return (
    <div className="container " style={{ padding: "100px 0" }}>
      <h1 className="text-center mb-4">Edit Article</h1>
      <div className="text-center mb-4">
        <NavLink to={"/"} className="btn text-primary">
          ← Back to Home
        </NavLink>
      </div>

      <ArticleForm />
    </div>
  );
}

export default ArticleEdit;
