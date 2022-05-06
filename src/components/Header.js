import { useParams } from "react-router-dom";

const Header = () => {

  const { category, id } = useParams();
  return (

    <h1>  header Page - {category} {id} </h1>

  );
};
export default Header;
