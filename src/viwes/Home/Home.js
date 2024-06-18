import "./Home.css"
import blogs from "../../data"
import BlogCard from "../../component/BlogCard/BlogCard"
function Home() {

  
  return (
    <>
    {
      blogs.map((blogOject , i)=>
      {
       const {
        id,
        title ,
        recipe,
        author,
        date,
        categories,
        } = blogOject
        
       return(
        <BlogCard
        id ={id}
        key ={i}
        title={title}
        recipe={recipe}
        author={author}
        date={date}
        categories={categories}
        />)
      })
    }
    </>
  )
}

export default Home
