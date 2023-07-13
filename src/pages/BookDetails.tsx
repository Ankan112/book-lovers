import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { Title } = useParams();
  console.log(Title);
  return (
    <div>
      <h1>BookDetails page</h1>
    </div>
  );
};

export default BookDetails;
