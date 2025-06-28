import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getArticleStart, getArticleSuccess } from "../slice/article";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);
  const { article } = useSelector((state) => state.article);

  async function getArticle() {
    dispatch(getArticleStart());
    try {
      const res = await axios.get(`/articles/${slug}`);
      dispatch(getArticleSuccess(res.data.article));
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  }

  useEffect(() => {
    getArticle();
  }, [slug, dispatch]);

  return (
    <section style={{ padding: "100px 0", maxWidth: "800px", margin: "0 auto" }}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/015/013/727/non_2x/article-writing-design-on-a-green-background-free-vector.jpg"
        alt=""
        width="100%"
        height="300px"
        style={{ objectFit: "cover" }}
      />

      <div className="row my-5">
        <div className="col-12">
          <h2 className="card-title fw-bolder">{article?.title}</h2>
        </div>

        <div className="col-9 mt-5">
          <div className="d-flex gap-3">
            <img
              className="rounded"
              src="https://picsum.photos/200"
              width="50"
              height="50"
              alt=""
            />

            <div>
              <p className="fw-semibold mb-2">@{article?.author.username}</p>
              <p className="text-secondary">{article?.author.bio}</p>
            </div>
          </div>
        </div>

        <div className="col-12 my-3">
          <p className="card-text fs-5" style={{ fontFamily: "serif" }}>
            {article?.body}
          </p>
        </div>

        <div className="col-12 ">
          <p className="card-text text-muted">
            <span className="fw-bold">Created: </span>
            {new Date(article?.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArticleDetail;
