import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

function Home() {
  return (
    <div>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recipes/:id",
    element: <RecipeDetails />,
  },
  {
    path: "/recipes/:id/edit",
    element: <EditRecipeForm />,
  },
]);

function App() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <header style={{ marginBottom: 18 }}>
        <h1>🍲 Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
