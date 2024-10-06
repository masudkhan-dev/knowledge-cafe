import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-200 px-8">
      <div className="container mx-auto px-3 lg:px-0 ">
        <div className="mt-10 space-y-5">
          <h2 className="text-3xl exo-bolder bg-rose-500 shadow-xl text-center py-5 rounded-lg">
            Reading Times: {readingTime}
          </h2>
          <h2 className="text-3xl exo-bolder bg-gray-100 shadow-xl text-center py-5 rounded-lg">
            Bookmarked Blogs: {bookmarks.length}{" "}
          </h2>
        </div>
        <div className="mt-5">
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
