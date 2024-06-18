import { Link } from "react-router-dom"
import "./BlogCard.css"
// import { findDOMNode } from "react-dom";


function BlogCard({ id, title, recipe, author, date, categories }) {
  return (
    <Link className="cards-container" to={`/blog/${id}`}>
      <span className="title-heading">{title}</span>
      <p>{recipe.substring(0, 70)}...</p>
      <div className="author-card">
        <img src={author.avatar} className="author-avatar" alt="Author avatar"/>
        <span className="author-name">{author.name}</span>
        <span className="author-date">{date}</span>
      </div>
      {categories.map((category, i) => (
        <span key={i} className="categories-badge">{category}</span>
      ))}
  
    </Link>
  );
}

export default BlogCard
