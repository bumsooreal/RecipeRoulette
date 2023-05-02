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
        <main class="Profile">
            <div className='Dish Name'>  
                {itemName}
            </div>
        
            <div className="Ending Time">
                {"Estimated time: " + (itemData['totalTime'] > 0 ? itemData['totalTime'] + " minute(s)" : "less than a minute")}
            </div>
        
            <div className='Picture'>
                <img className='Image' src={itemData['image']} alt= 'Recipe Image' />
            </div>
        
            <div className="Ingredients">
                {openAIData["Ingredients"].map((ingredient) => {
                    return <div className="Ingredient Line">{ingredient}</div>
                })}
            </div>
            
            <div className="Steps">
                <div className="Recipe">{openAIData["Recipe"]}</div>
            </div>
            
            <div className="Nutrition">
                {openAIData["Nutrition"].map((nutrition) => {
                    return <div className="Nutrition Line">{nutrition}</div>
                })}
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