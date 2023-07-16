/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/features/books/bookApi";
import swal from "sweetalert";
import BookReview from "../components/ui/BookReview";

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000,
  });
  const navigate = useNavigate();
  const [deleteBook] = useDeleteBookMutation(undefined);
  // const handleDelete = () => {
  //   console.log("btn clicked");

  // };
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

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center mt-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{data?.data.title}</h2>
            <p>{data?.data.author}</p>
            <p>{data?.data.genre}</p>
            <p>{data?.data.publicationYear}</p>
            <div className="card-actions justify-end">
              <Link to={`/edit-book/${data?.data._id}`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
            </div>
            <div className="card-actions justify-end">
              <button onClick={handleDelete} className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookReview id={id}></BookReview>
    </div>
  );
};

export default BookDetails;
