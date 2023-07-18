/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../redux/features/books/bookApi";
import { IBook } from "../../types/commonTypes";

const BooksCard = () => {
  const { data } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000,
  });

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-4xl font-bold my-5">Latest Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {data?.data.slice(0, 10).map((book: IBook) => (
          <div key={book._id} className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-3xl">{book?.title}</h2>
              <p className="font-medium text-xl">Author: {book?.author}</p>
              <p className="font-normal text-lg -mt-2">Genre: {book?.genre}</p>
              <p className="font-normal text-lg -mt-2">
                Publication Year: {book?.publicationYear}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/book-details/${book._id}`}>
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
