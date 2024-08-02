import { Link } from "react-router-dom"
import "./BlogCard.css"



function BlogCard({  id ,title, recipe, author, date }) {
  return (
    <Link className="cards-container" to={`/blog/${id}`}>
      <span className="title-heading">{title}</span><br/>
      <div className="user-details-container">
      <span className="author-name">{author.name}</span>
      <span className="author-date">{date}</span>
      <img src={author.avatar} className="author-avatar" alt="Author avatar"/>
      </div>
      <p>{recipe.substring(0, 70)}...</p>
    </Link>
  );
}

export default BlogCard
