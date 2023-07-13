import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BooksCard = () => {
  //! dummy data start

  const [data, setData] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch("../../../public/books.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //! dummy data end

  return (
    <div className="w-11/12 mx-auto">
      <h1>Book sections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {data.map((book, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{book?.Title}</h2>
              <p>{book?.Author}</p>
              <p>{book?.Genre}</p>
              <p>{book?.PublicationDate}</p>
              <div className="card-actions justify-end">
                <Link to={`/book-details/${book.Title}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksCard;
