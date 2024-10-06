import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handleAddToBookmark={handleAddToBookmark}
              handleReadingTime={handleReadingTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
