import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  Title: string;
  Author: string;
  Genre: string;
  PublicationDate: string;
  Review: [];
}
const NewBook = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log({ ...data, Review: [] });
  };
  return (
    <div>
      <h1>new book page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Title", { required: true })} />
        {errors.Title && "Title is required"}
        <input {...register("Author", { required: true })} />
        {errors.Author && "Author is required"}
        <input {...register("Genre", { required: true })} />
        {errors.Genre && "Genre is required"}
        <input {...register("PublicationDate", { required: true })} />
        {errors.PublicationDate && "PublicationDate is required"}
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewBook;
