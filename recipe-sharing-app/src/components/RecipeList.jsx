import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  if (recipes.length === 0) {
    return <p>No recipes found 🔍</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "1rem" }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;



