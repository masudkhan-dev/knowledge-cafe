import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
  const {
    title,
    cover,
    author_img,
    posted_date,
    reading_time,
    hashtag,
    author,
  } = blog;

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="m-10 border border-gray-300 p-8 shadow-xl">
          <img src={cover.url} alt={cover.alt} />

          <div className="flex justify-between items-center my-3">
            <div className="flex justify-between items-center gap-5">
              <img
                src={author_img.url}
                alt={author_img.alt}
                width={60}
                className="rounded-full"
              />
              <div>
                <h4 className="text-xl exo-bold">{author}</h4>
                <p className="text-sm text-gray-400">{posted_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-md text-gray-400">
                {reading_time} Min to read
              </p>
              <button
                onClick={() => handleAddToBookmark(blog)}
                className="cursor-pointer text-gray-400"
              >
                <FaRegBookmark />
              </button>
            </div>
          </div>

          <h2 className="text-4xl exo-bolder my-5">{title}</h2>
          <p className="text-sm text-gray-400 my-4">{hashtag}</p>

          <button
            onClick={() => handleReadingTime(reading_time)}
            className="text-blue-700 underline"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
