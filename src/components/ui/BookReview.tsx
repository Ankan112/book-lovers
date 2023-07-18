import { ChangeEvent, FormEvent, useState } from "react";
import {
  useGetSingleBookQuery,
  usePostCommentMutation,
} from "../../redux/features/books/bookApi";

type IProps = {
  id: string;
};

const BookReview = ({ id }: IProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  const [postComment] = usePostCommentMutation();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = {
      id: id,
      data: { review: inputValue },
    };
    postComment(result);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <h1 className=" mt-10 text-3xl text-center font-semibold">
          Write your valuable review about this book.
        </h1>
        <div className="divider"></div>
        <div className="flex mx-auto w-2/3 justify-center">
          <div className="w-2/3 mx-auto mt-5">
            <form
              className="flex gap-5 justify-center items-center"
              onSubmit={handleSubmit}
            >
              <textarea
                className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                placeholder="Your Review..."
                onChange={handleChange}
                value={inputValue}
              />
              <button
                type="submit"
                className="btn font-medium text-[15px] -ml-6"
              >
                Post
              </button>
            </form>
            <div className="mt-10 ml-36">
              {data?.data?.review?.map((comment: string, index: number) => (
                <div
                  key={index}
                  className="flex gap-3 justify-start  items-center mb-5"
                >
                  <div className="avatar online">
                    <div className="rounded-full">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/20/user-male-circle.png"
                        alt="user-male-circle"
                      />
                    </div>
                  </div>
                  <p className="text-base font-medium">{comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookReview;
