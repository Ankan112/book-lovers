/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/features/books/bookApi";
import swal from "sweetalert";
import BookReview from "../components/ui/BookReview";
import { IBook } from "../types/commonTypes";
import { useAppDispatch } from "../redux/hook";
import { addToWishlist } from "../redux/features/wishlist/wishlistSlice";
import { addToCurrentlyRead } from "../redux/features/currenltyRead/currentlyReadSlice";

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000,
  });
  const navigate = useNavigate();
  const [deleteBook] = useDeleteBookMutation(undefined);
  async function handleDelete() {
    try {
      const willDelete = await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this book?",
        icon: "warning",
        dangerMode: true,
      });

      if (willDelete) {
        deleteBook(id);
        void swal(
          "Deleted!",
          "Your imaginary file has been deleted!",
          "success"
        );
        navigate("/");
      }
    } catch (error) {
      // Handle the error
    }
  }

  const dispatch = useAppDispatch();
  const handleWishlist = (books: IBook) => {
    void swal("Good Job!", "Your book has been added in wishlist!", "success");
    dispatch(addToWishlist(books));
  };

  const handleCurrentlyRead = (books: IBook) => {
    void swal(
      "Good Job!",
      "Your book has been added in currently reading!",
      "success"
    );
    dispatch(addToCurrentlyRead(books));
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center mt-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h2 className="card-title">{data?.data.title}</h2>
              <div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleWishlist(data?.data)}
                    className="btn"
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
            <p>{data?.data.author}</p>
            <p>{data?.data.genre}</p>
            <p>{data?.data.publicationYear}</p>
            <div className="flex">
              <div className="card-actions justify-end">
                <Link to={`/edit-book/${data?.data._id}`}>
                  <button className="btn btn-primary">Edit</button>
                </Link>
              </div>
              <div className="card-actions justify-end ml-4">
                <button onClick={handleDelete} className="btn btn-error">
                  Delete
                </button>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div
                onClick={() => handleCurrentlyRead(data?.data)}
                className="badge badge-neutral cursor-pointer"
              >
                Add to currently read
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookReview id={id}></BookReview>
    </div>
  );
};

export default BookDetails;
