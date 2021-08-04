import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Link from "../../components/Link/Link";
import { registerNewCategory } from "../../services/axios/category-service";

const Category = () => {
  const [newCategory, setNewCategory] = useState("");

  const confirmHandler = () => {
    registerNewCategory(newCategory);
    setNewCategory("");
  };

  const categoryInputHandler = (event) => {
    setNewCategory(event.target.value);
  };

  return (
    <div>
      <Input onChange={categoryInputHandler} value={newCategory} />
      <Link to="/">Home</Link>
      <Button onClick={confirmHandler}>Confirm </Button>
    </div>
  );
};

export default Category;
