import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();

  const recipe = recipes.find((r) => r.id === Number(id));

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  if (!recipe) {
    return <p>Recipe not found ❌</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ prevents page reload

    updateRecipe(recipe.id, { title, description });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <div>
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;
