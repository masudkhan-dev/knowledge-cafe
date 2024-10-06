const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="bg-gray-100 shadow-xl p-5 mt-3 rounded-lg">
      <h2 className="exo-bold">{title}</h2>
    </div>
  );
};

export default Bookmark;
