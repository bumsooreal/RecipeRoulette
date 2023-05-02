import './App.css';
import { Link } from "react-router-dom"
import { useState } from 'react'
import Dropdown from '../Dropdown'

function App() {
  const cuisineType = [
    { value: "asian", label: "Asian" },
    { value: "british", label: "British" },
    { value: "american", label: "American" },
    { value: "caribbean", label: "Caribbean" },
    { value: "central europe", label: "Central Europe" },
    { value: "chinese", label: "Chinese" },
    { value: "eastern europe", label: "Eastern Europe" },
    { value: "french", label: "French" },
    { value: "indian", label: "Indian" },
    { value: "italian", label: "Italian" },
    { value: "japanese", label: "Japanese" },
    { value: "kosher", label: "Kosher" },
    { value: "mediterranean", label: "Mediterranean" },
    { value: "mexican", label: "Mexican" },
    { value: "middle eastern", label: "Middle Eastern" },
    { value: "nordic", label: "Nordic" },
    { value: "south american", label: "South American" },
    { value: "south east asian", label: "South East Asian" },
  ];


  const mealType = [
    { value: "breakfast", label: "Breakfast" },
    { value: "lunch", label: "Lunch" },
    { value: "dinner", label: "Dinner" },
    { value: "snack", label: "Snack" },
    { value: "tea time", label: "Teatime" },
  ];

  const health = [
    { value: "vegetarian", label: "Vegetarian" },
    { value: "vegan", label: "Vegan" },
    { value: "alcohol-free", label: "Alcohol Free" },
    { value: "dairy-free", label: "Dairy Free" },
    { value: "egg-free", label: "Egg Free" },
    { value: "fish-free", label: "Fish Free" },
    { value: "gluten-free", label: "Gluten Free" },
    { value: "keto-friendly", label: "Keto" },
    { value: "kosher", label: "Kosher" },
    { value: "low-fat-abs", label: "Low Fat" },
    { value: "low-sugar", label: "Low Sugar" },
    { value: "peanut-free", label: "Peanut Free" },
    { value: "soy-free", label: "Soy Free" },
    { value: "tree-nut-free", label: "Tree Nut Free" },
  ];

  const properties = {};

  function setProperty(name, value) {
    properties[name] = value;
  }


  // const [timeValue, setTimeValue] = useState('');

  const handleInputChange = (event) => {
    setProperty("time", event.target.value);
    // setTimeValue(event.target.value);
  };


  return (
    <div className="App">
      <header className="App-header">
        Recipe Roulette
      </header>
      <div class="Filters">
        <div>
          <h4>Cuisine Type</h4>
    

          <Dropdown placeholder="Select..." options={cuisineType} onChange={setProperty} name="cuisineType"/>
        </div>

        <div>
          <h4>Meal Type</h4>
          <Dropdown placeholder="Select..." options={mealType} onChange={setProperty} name="mealType"/>
        </div>
      
        <div>
          <h4>Dietary Restrictions</h4>
          <Dropdown placeholder="Select..." options={health} onChange={setProperty} name="health"/>
        </div>
        <div>
          <h4>Time (min)</h4>
          <input className='Time'type="number" id="Time" onChange={handleInputChange}/> 
          
        </div>
      </div>

      <div>
        <Link to="/results" state={properties}>
          <button id="generate-btn"> Generate </button>
        </Link>
      </div>
    </div>
  );
}

export default App;


//for time div, make sure to do time = documnet.getelementbyid()

// function Dropdown() {
//   const [selectedItem, setSelectedItem] = useState('');

//   const handleChange = (event) => {
//     setSelectedItem(event.target.value);
//   }

//   return (
//     <div>
//       <select value={selectedItem} onChange={handleChange}>
//         <option value="">Select an item</option>
//         <option value="item1">Item 1</option>
//         <option value="item2">Item 2</option>
//         <option value="item3">Item 3</option>
//       </select>
//     </div>
//   );
// }

// export default Dropdown;