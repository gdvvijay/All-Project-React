import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecipesList() {
    const [recipes,setRecipes]=useState([])


useEffect(()=>{
      fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then((data)=>{
    setRecipes(data.recipes)
})
},[])
if(recipes.length === 0){
    return <div className="font-bold text-red-500 italic text-2xl text-center">Loading...</div>
}
  return (
    <main className="w-full max-w-6xl mx-auto px-1.5">
      <div className="all-items-container w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 mt-3">
       
        {
            recipes.map((recipe)=>{
                return(
                    <Link state={recipe} to={recipe.id?.toString()} key={recipe.id} className="item1 border max-w-96 overflow-hidden rounded-2xl">
            <div className="image-container h-72">
                <img src={recipe.image} className="w-full h-full object-fill"/>
            </div>
            <div className="text-container py-3 pl-3">
                <h1><span className="font-bold">Title:-</span><span className="italic">{recipe.name}</span></h1>
                <p><span className="font-bold">prep Time Minutes:-</span>{recipe.prepTimeMinutes}</p>
                <p><span className="font-bold">cook Time Minutes:-</span>{recipe.cookTimeMinutes}</p>
            </div>
       
        </Link>
                )
            })
        }
        
      </div>
    </main>
  );
}
