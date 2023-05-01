import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

function FoodProfile() {
    const location = useLocation();
	const hit= location.state;
    const itemData = hit['recipe'];
    // Dish name
    // Ending time
    // Picture
    // Ingredients
    // Steps
    // Nutrition
        // Calories    
        // 


        
    console.log(itemData);
    return (
        <main>
            <div className='Dish Name'>  
                { itemData['label'].replace("Recipe", '').replace('!',"").replace("recipes",'')}
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