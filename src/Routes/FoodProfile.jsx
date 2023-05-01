import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import openAI from '../OpenAI.js'


function FoodProfile() {
    const location = useLocation();
	const hit= location.state;
    const itemData = hit['recipe'];
    const itemName = itemData['label'].replace("Recipe", '').replace('!',"").replace("recipes",'');
    const [openAIData, setData] = useState(null);

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
            console.log(JSON.parse(response))
            setData(response);
        }
        fetchAndSet();
    }, [openAIData]);
    
    return (
        <main>
            <div className='Dish Name'>  
                itemName
            </div>
        
            <div className="Ending Time">
                {"Estimated time: " + (itemData['totalTime'] > 0 ? itemData['totalTime'] + " minute(s)" : "less than a minute")}
            </div>
        
            <div className='Picture'>
                <img className='Image' src={itemData['image']} alt= 'Recipe Image' />
            </div>
        
            <div className="Ingredients">
                
            </div>
            
            <div className="Steps">

            </div>
            
            <div className="Nutrition">

            </div>
            
		 					
							
		
        </main>
    )
}

export default FoodProfile;

