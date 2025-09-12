import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";


function Home() {
  return (
    <div>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
        <header style={{ marginBottom: 18 }}>
          <h1>🍲 Recipe Sharing App</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
