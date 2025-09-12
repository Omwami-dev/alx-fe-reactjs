// src/components/recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }],
    })),

  // Update existing recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
