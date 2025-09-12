import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found ❌</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
    </div>
  );
};

export default RecipeDetails;

