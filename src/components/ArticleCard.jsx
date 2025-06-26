function ArticleCard({ article }) {
  return ( 
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{ article.title }</h5>
          <p className="card-text">
            { article.description }
          </p>
        </div>

        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm text-primary" >
                View
              </button>
              {/* Replace v-if with conditional rendering if needed */}
              {/* <button type="button" className="btn btn-sm text-secondary">
                Edit
              </button>
              <button type="button" className="btn btn-sm text-danger">
                Delete
              </button> */}
            </div>
            <small className="text-body-secondary">{ new Date(article.createdAt).toLocaleDateString() }</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard;