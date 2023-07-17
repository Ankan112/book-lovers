import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { IBook, Inputs } from "../types/commonTypes";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import Toggle from "react-toggle";
import "../toggle.css";
import { toggleState } from "../redux/features/books/bookSlice";

const AllBooks = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  if (isLoading) {
    <p>Loading...</p>;
  }

  const { genre } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  // let booksData;
  // if (genre) {
  //   booksData = data?.data?.filter((item: IBook) => item.genre === "Poetry");
  // }
  // if (genre) {
  //   booksData = data?.data?.filter(
  //     (item: IBook) => item.genre === "Historical"
  //   );
  // }
  // if (genre) {
  //   booksData = data?.data?.filter((item: IBook) => item.genre === "Novel");
  // }
  // else {
  //   booksData = data;
  // }
  // console.log(booksData);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center mt-10">
          {/* search box section start */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                defaultValue="searchResult"
                {...register("searchResult")}
              />
              <input type="submit" />
            </form>
          </div>
          {/* search box section end */}
          {/* all books start */}
          <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
              {data?.data?.map((book: IBook) => (
                <div key={book._id} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{book?.title}</h2>
                    <p>{book?.author}</p>
                    <p>{book?.genre}</p>
                    <p>{book?.publicationYear}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/book-details/${book?._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* all books end */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <div>
              <h2 className="text-2xl font-semibold text-center">Genre</h2>{" "}
              <hr />
              <div className="flex items-center mt-5">
                <label className="text-lg font-medium" htmlFor="cheese-status">
                  Novel
                </label>
                <Toggle
                  className="ml-2"
                  id="cheese-status"
                  defaultChecked={true}
                  onClick={() => dispatch(toggleState())}
                />
              </div>
              <div className="flex items-center mt-5">
                <label className="text-lg font-medium" htmlFor="cheese-status">
                  Historical
                </label>
                <Toggle
                  className="ml-2"
                  id="cheese-status"
                  defaultChecked={true}
                />
              </div>
              <div className="flex items-center mt-5">
                <label className="text-lg font-medium" htmlFor="cheese-status">
                  Poetry
                </label>
                <Toggle
                  className="ml-2"
                  id="cheese-status"
                  defaultChecked={true}
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-center mt-4">
                Publication Year
              </h2>{" "}
              <hr />
              <div>
                <div className="flex items-center mt-5">
                  <label
                    className="text-lg font-medium"
                    htmlFor="cheese-status"
                  >
                    1800 - 1850
                  </label>
                  <Toggle
                    className="ml-2"
                    id="cheese-status"
                    defaultChecked={true}
                  />
                </div>
                <div className="flex items-center mt-5">
                  <label
                    className="text-lg font-medium"
                    htmlFor="cheese-status"
                  >
                    1851 - 1900
                  </label>
                  <Toggle
                    className="ml-2"
                    id="cheese-status"
                    defaultChecked={true}
                  />
                </div>
                <div className="flex items-center mt-5">
                  <label
                    className="text-lg font-medium"
                    htmlFor="cheese-status"
                  >
                    1901 - 1950
                  </label>
                  <Toggle
                    className="ml-2"
                    id="cheese-status"
                    defaultChecked={true}
                  />
                </div>
                <div className="flex items-center mt-5">
                  <label
                    className="text-lg font-medium"
                    htmlFor="cheese-status"
                  >
                    1951 - 2000
                  </label>
                  <Toggle
                    className="ml-2"
                    id="cheese-status"
                    defaultChecked={true}
                  />
                </div>
                <div className="flex items-center mt-5">
                  <label
                    className="text-lg font-medium"
                    htmlFor="cheese-status"
                  >
                    2001 - 2023
                  </label>
                  <Toggle
                    className="ml-2"
                    id="cheese-status"
                    defaultChecked={true}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              {user.email && (
                <>
                  <Link to="/new-book">
                    <button className="btn btn-neutral">Add New Book</button>
                  </Link>{" "}
                  <br />
                  <Link className="" to="/wishlist">
                    <button className="btn btn-neutral mt-3">
                      My wishlist
                    </button>
                  </Link>
                  <br />
                  <Link className="" to="/currently-reading">
                    <button className="btn btn-neutral mt-3">
                      Currently Reading
                    </button>
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
