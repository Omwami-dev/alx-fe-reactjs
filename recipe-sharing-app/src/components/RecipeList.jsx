import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              padding: 12,
              marginBottom: 12,
              borderRadius: 6,
            }}
          >
            <h3 style={{ margin: 0 }}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p style={{ marginTop: 6 }}>{recipe.description}</p>
            <div style={{ marginTop: 8 }}>
              <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 12 }}>
                Edit
              </Link>
              <DeleteRecipeButton recipeId={recipe.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

