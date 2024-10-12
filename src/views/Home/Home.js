import './Home.css';
import blogs from "../../data";
import BlogCard from "../../component/BlogCard/BlogCard";
function Home() {
  return (
    <>
    <h1 className="title">Recipe Blogs</h1>
    <div className="home-contanier">
      {blogs.map((blogOject, i) => {
        const { id, title, recipe, author, date, categories } = blogOject;

        return (
        
            <BlogCard 
              id={id}
              key={i}
              title={title}
              recipe={recipe}
              author={author}
              date={date}
              categories={categories}
            />
        );
      })}
    </div>
    </>
  );
}

export default Home;
