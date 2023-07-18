/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/books/bookApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IFormInputs } from "./NewBook";

const EditBook = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data } = useGetSingleBookQuery(id!);
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log({ id, data });
    updateBook({ id, data });
    void swal("Good Job!", "Your book has been updated!", "success");
    navigate("/");
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <div>
          <h1 className="text-2xl font-medium text-center my-4">Edit book</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className="text-lg font-medium">Title</p>
              <div className="">
                <input
                  defaultValue={data?.data.title}
                  className="border-4 outline-none rounded-lg w-60 px-2"
                  {...register("title", { required: true })}
                />
                <br />
                {/* <p className="text-red-600">
                  {errors.title && "Title is required"}
                </p> */}
              </div>
            </div>
            <div>
              <p className="text-lg font-medium mt-3">Author</p>
              <div>
                <input
                  defaultValue={data?.data.author}
                  className="border-4 outline-none rounded-lg w-60 px-2"
                  {...register("author", { required: true })}
                />
                <br />
                {/* <p className="text-red-600">
                  {errors.author && "Author is required"}
                </p> */}
              </div>
            </div>
            <div>
              <p className="text-lg font-medium mt-3">Genre</p>
              <div>
                <input
                  defaultValue={data?.data.genre}
                  className="border-4 outline-none rounded-lg w-60 px-2"
                  {...register("genre", { required: true })}
                />
                <br />
                {/* <p className="text-red-600">
                  {errors.genre && "Genre is required"}
                </p> */}
              </div>
            </div>
            <div>
              <p className="text-lg font-medium mt-3">Publication Year</p>
              <div>
                <input
                  defaultValue={data?.data.publicationYear}
                  className="border-4 outline-none rounded-lg w-60 px-2"
                  {...register("publicationYear", { required: true })}
                />{" "}
                <br />
                {/* <p className="text-red-600">
                  {errors.publicationYear && "PublicationYear is required"}
                </p> */}
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
    </div>
  );
};

export default EditBook;
