import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>
        <Link to="/recipes/1">Go to Recipe 1</Link>
      </p>
    </div>
  );
}

function RecipeDetails() {
  return <h2>Recipe Details Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>🍲 Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

