import { removeFromWishlist } from "../redux/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IBook } from "../types/commonTypes";

const Wishlist = () => {
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  return (
    <div className="w-11/12 mx-auto h-screen">
      <h1 className="text-2xl my-5 font-semibold">My wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {wishlist.length === 0 && (
          <p className="flex justify-center items-center text-4xl">
            Your wish list is empty!
          </p>
        )}
        {wishlist.map((book: IBook) => (
          <div key={book._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">{book?.title}</h2>
                <button
                  onClick={() => dispatch(removeFromWishlist(book))}
                  className="btn btn-warning"
                >
                  Remove from wishlist
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

export default Wishlist;
