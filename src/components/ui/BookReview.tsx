import { ChangeEvent, FormEvent, useState } from "react";
import {
  useGetSingleBookQuery,
  usePostCommentMutation,
} from "../../redux/features/books/bookApi";
// const dummyComments = [
//   "Bhalo na",
//   "Ki shob ghori egula??",
//   "Eta kono product holo ??",
//   "200 taka dibo, hobe ??",
// ];

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
    <div className="flex justify-center">
      <div className="max-w-7xl mx-auto mt-5">
        <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
          <textarea
            className="min-h-[30px] border-4"
            onChange={handleChange}
            value={inputValue}
          />
          <button
            type="submit"
            className=" h-10 font-medium w-10 p-2 text-[20px]"
          >
            Post
          </button>
        </form>
        <div className="mt-10">
          {data?.data?.review?.map((comment: string, index: number) => (
            <div key={index} className="flex gap-3 items-center mb-5">
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookReview;
