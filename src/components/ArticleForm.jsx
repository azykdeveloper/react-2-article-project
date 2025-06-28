import { useEffect, useState } from "react";

function ArticleForm({initialData, onSubmit}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setBody(initialData.body);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        title,
        description,
        body,
      });
    }
  };

  return (
    <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="title" className="form-label">
              Title
            </label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="title" required />
          </div>
          <div className="mb-3">
            <label for="description" className="form-label">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              id="description"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="body" className="form-label">
              Body
            </label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} className="form-control" id="body" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Saqlash
          </button>
        </form>
      </div>
    </div>
  );
}

export default ArticleForm;