import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const id = Date.now(); // simple id for demo
    addRecipe({ id, title: title.trim(), description: description.trim() });

    setTitle('');
    setDescription('');

    // Navigate to the newly created recipe's details page
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Add Recipe</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
        rows={4}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;

