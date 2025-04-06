import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";
import { getRecipeFromChefClaude } from "../ai"
import Loading from "./Loading";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([])
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    setLoading(true);       
    setRecipe("");          
    const recipeMarkDown = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkDown);
    setLoading(false);
  }
  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredientList ingredients={ingredients} getRecipe={getRecipe}/>}
      {loading && <Loading />}
      {!loading && recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
