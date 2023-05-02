import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import openAI from '../OpenAI.js'
import Loader from "react-spinners/PacmanLoader"
import './FoodProfile.css'



function FoodProfile() {
    const location = useLocation();
	const hit= location.state;
    const itemData = hit['recipe'];
    const itemName = itemData['label'].replace("Recipe", '').replace('!',"").replace("recipes",'');
    const [openAIData, setData] = useState(null);
    
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

   
    
    // Dish name
    // Ending time
    // Picture
    // Ingredients
    // Steps
    // Nutrition
        // Calories    
        // 
    useEffect(() => {
        const fetchAndSet = async () => {
            const response = await openAI(itemName);
            console.log(response);
            console.log("JSON:")
            const data = JSON.parse(response)
            console.log(data)
            setData(data[0]);
        }
        fetchAndSet();
    }, [hit]);
    
    return (
        openAIData == null ?
        <main className='Loading-Container'>
            <div className="Loading">
                <Loader
                    color={"#06c168"}
                    loading={openAIData==null}
                    size={325}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </main>
        :
        <main>
            <Link to="/">
                <header className="App-header">
				    Recipe Roulette
		        </header>
            </Link>
            

            <div class="Profile">

            <div class="introduction">
                <div class="columns">
                    <div className='DishName'>  
                        <h2>{itemName}</h2>
                    </div>
                
                    <div className='Picture'>
                        <img className='Image' src={itemData['image']} alt= 'Recipe Image' />
                    </div>
                </div>
                <div className="EndingTime">
                    {"Estimated time: " + (itemData['totalTime'] > 0 ? itemData['totalTime'] + " minute(s)" : "less than a minute")}
                </div>
            </div>

            <div class="description">
                <div className="Ingredients">
                    <h2>Ingredients</h2>
                    {openAIData["Ingredients"].map((ingredient, i) => {
                        return <div className="IngredientLine" key={i}>{ingredient}</div>
                    })}
                </div>
            
                {/* <div className="Steps">
                    <div className="Recipe">{openAIData["Recipe"]}</div>
                </div> */}

                <div className='steps-container'>
                    <h2>Steps</h2>
                {openAIData["Recipe"].replace(/[0-9]./g, '').split(". ").map((step) => {
                    return <div className='StepLine'> {step} </div>
                })}
                </div>
                
                <div className="Nutrition">
                    <h2>Nutrition</h2>
                    {openAIData["Nutrition"].map((nutrition) => {
                        return <div className="NutritionLine">{nutrition}</div>
                    })}
                </div>	
            </div>				
        </div>
        </main>
    )
}

export default FoodProfile;






//   return (
//     <div className="sweet-loading">
//       <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
//       <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

//       <ClipLoader
//         color={color}
//         loading={loading}
//         cssOverride={override}
//         size={150}
//         aria-label="Loading Spinner"
//         data-testid="loader"
//       />
//     </div>
//   );