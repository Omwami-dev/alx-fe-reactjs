import useRecipeStore from "../store/recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  if (favoriteRecipes.length === 0) {
    return <p>No favorites yet ⭐</p>;
  }

  return (
    <div>
      <h2>My Favorites ⭐</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "1rem" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
