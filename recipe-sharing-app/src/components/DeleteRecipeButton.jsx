import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (!confirmed) return;

    deleteRecipe(recipeId);
    // After deletion, go back to home / list
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ color: 'crimson' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
