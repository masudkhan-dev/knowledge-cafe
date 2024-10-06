import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    // can't understand
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove thr mark as read from bookmark
    const removeBookmark = bookmarks.filter((bookmarks) => bookmarks.id !== id);
    setBookmarks(removeBookmark);
  };

  return (
    <>
      <Header />
      <div className="md:flex">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
        />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
