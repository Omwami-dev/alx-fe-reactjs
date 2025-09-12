import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const navigate = useNavigate();

  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );

  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // populate form when recipe loads
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || '');
      setDescription(recipe.description || '');
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe(recipeId, { title: title.trim(), description: description.trim() });
    navigate(`/recipes/${recipeId}`); // back to details
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        rows={5}
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <button type="submit">Save</button>
      <button
        type="button"
        onClick={() => navigate(-1)}
        style={{ marginLeft: 8 }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
