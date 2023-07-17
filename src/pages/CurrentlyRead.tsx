import { removeFromCurrentlyRead } from "../redux/features/currenltyRead/currentlyReadSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IBook } from "../types/commonTypes";

const CurrentlyRead = () => {
  const { currentlyRead } = useAppSelector((state) => state.currentlyRead);
  const dispatch = useAppDispatch();

  return (
    <div className="w-11/12 mx-auto h-screen">
      <h1 className="text-2xl my-5 font-semibold">
        My currently reading books
      </h1>
      {currentlyRead.length === 0 && (
        <p className="flex justify-center items-center text-4xl">
          Your currently reading book is empty!
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {currentlyRead.map((book: IBook) => (
          <div key={book._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">{book?.title}</h2>
                <button
                  onClick={() => dispatch(removeFromCurrentlyRead(book))}
                  className="btn btn-warning"
                >
                  Finish Reading
                </button>
              </div>
              <p>{book?.author}</p>
              <p>{book?.genre}</p>
              <p>{book?.publicationYear}</p>
              {/* <div className="card-actions justify-end">
                  <Link to={`/book-details/${book._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentlyRead;
