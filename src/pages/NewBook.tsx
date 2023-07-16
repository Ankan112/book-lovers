import { useForm, SubmitHandler } from "react-hook-form";
import { useAddNewBookMutation } from "../redux/features/books/bookApi";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export interface IFormInputs {
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  review: [];
}
const NewBook = () => {
  const [addNewBook] = useAddNewBookMutation();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const result = {
      book: { ...data, review: [] },
    };
    addNewBook(result);
    void swal("Good Job!", "Your book has been added!", "success");
    navigate("/");
  };
  return (
    <div className="flex justify-center h-screen">
      <div>
        <h1 className="text-2xl font-medium text-center my-4">Add New book</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="text-lg font-medium">Title</p>
            <div className="">
              <input
                className="border-4 outline-none rounded-lg w-60 px-2"
                {...register("title", { required: true })}
              />
              <br />
              <p className="text-red-600">
                {errors.title && "Title is required"}
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg font-medium mt-3">Author</p>
            <div>
              <input
                className="border-4 outline-none rounded-lg w-60 px-2"
                {...register("author", { required: true })}
              />
              <br />
              <p className="text-red-600">
                {errors.author && "Author is required"}
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg font-medium mt-3">Genre</p>
            <div>
              <input
                className="border-4 outline-none rounded-lg w-60 px-2"
                {...register("genre", { required: true })}
              />
              <br />
              <p className="text-red-600">
                {errors.genre && "Genre is required"}
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg font-medium mt-3">Publication Year</p>
            <div>
              <input
                className="border-4 outline-none rounded-lg w-60 px-2"
                {...register("publicationYear", { required: true })}
              />{" "}
              <br />
              <p className="text-red-600">
                {errors.publicationYear && "PublicationYear is required"}
              </p>
            </div>
          </div>
          <div>
            <input
              className="w-60 bg-black my-4 text-white py-2 border-4 cursor-pointer rounded-lg"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBook;
