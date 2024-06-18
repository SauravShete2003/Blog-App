import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "../../data"
function BlogView() 
{

  const {id} = useParams()
  const selecetedBlog = blogs.find((blogsObject)=>blogsObject.id == id)


  return (
  <div className="blogs-view-container">
    <h1 className="blogs-view-title">{selecetedBlog.title}</h1>
    <img src={selecetedBlog.author.avatar} alt="auther" height={"40px"}/>
    <p className="blogs-view-disc">{selecetedBlog.author.name}| {selecetedBlog.date}</p>
    <span>{selecetedBlog.categories}</span>
    <p>{selecetedBlog.recipe}</p>
  
  
  </div>
   
  )
}

export default BlogView
