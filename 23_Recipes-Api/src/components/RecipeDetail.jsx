import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"

export default function RecipeDetail(){
    const [recipeItem,setRecipeItem]=useState({});
    const url=useParams();
    const route=url.recipe;
    const {state:recipe}=useLocation()
   useEffect(()=>{
     if(recipe?.id){
        setRecipeItem(recipe)
    }else{
         fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then((data)=>{
    setRecipeItem(data.recipes.filter((recipe)=>recipe.id == route)[0])
})
    }
   },[])
   
    return(
        <div className="w-full max-w-6xl flex justify-between mx-auto mt-8 bg-gray-50 dark:bg-gray-700 overflow-hidden rounded-3xl max-[800px]:flex-wrap">
            <div className="image-container w-full max-[800px]:mx-3 max-[800px]:overflow-hidden max-[800px]:rounded-3xl">
                <img src={recipeItem.image}/>
            </div>
            <div className="text-container w-full flex flex-col justify-center ml-6 space-y-3 pr-3 py-1.5">
                <h1 className="bg-amber-200 drop-shadow dark:bg-amber-600 drop-shadow-amber-300"><span className="font-bold">Name:-</span><span className="italic">{recipeItem.name}</span></h1>
                <p className="bg-amber-200 drop-shadow dark:bg-amber-600 drop-shadow-amber-300"><span className="font-bold">Cook Time Minutes:-</span>{recipeItem.cookTimeMinutes}</p>
                <p className="bg-amber-200 drop-shadow dark:bg-amber-600 drop-shadow-amber-300"><span className="font-bold">Prep Time Minutes:-</span>{recipeItem.prepTimeMinutes}</p>
                <p className="bg-amber-200 drop-shadow dark:bg-amber-600 drop-shadow-amber-300"><span className="font-bold">Calories Per Serving:-</span>{recipeItem.caloriesPerServing}</p>
                <p className="bg-amber-200 drop-shadow dark:bg-amber-600 drop-shadow-amber-300"><span className="font-bold">Cuisine:-</span>{recipeItem.cuisine}</p>
                <p className="bg-amber-200 drop-shadow dark:bg-amber-600 drop-shadow-amber-300"><span className="font-bold">Rating:-</span>{recipeItem.rating} ({recipeItem.reviewCount})</p>
                <p className="bg-amber-200 drop-shadow dark:bg-amber-600 drop-shadow-amber-300"><span className="font-bold">Meal Type:-</span>{recipeItem.mealType?.join(', ')}</p>
                <p className="flex bg-amber-200 drop-shadow dark:bg-amber-600 drop-shadow-amber-300"><span className="font-bold">Ingredients:-</span><span className="italic">{recipeItem.ingredients?.join(', ')}</span></p>
                <p className="flex bg-amber-200 drop-shadow dark:bg-amber-600 drop-shadow-amber-300"><span className="font-bold">Instructions:-</span><span className="italic">{recipeItem.instructions?.join(' ')}</span></p>
            </div>
        </div>
    )
}