const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="flex justify-between items-center my-5 ">
          <h2 className="text-4xl">Knowledge Cafe</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYsaCrOgf2pyBobhHtKDTDXHLkpiyariCLA&s"
            alt="Display Picture"
            className="w-20"
          />
        </div>
        <hr />
      </div>
    </header>
  );
};

export default Header;
