import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // 🔹 Add recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // 🔹 Update recipe
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      ),
    })),

  // 🔹 Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // 🔹 Manage favorites
  addFavorite: (recipeId) =>
    set((state) =>
      state.favorites.includes(recipeId)
        ? state // avoid duplicates
        : { favorites: [...state.favorites, recipeId] }
    ),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // 🔹 Generate mock recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;

