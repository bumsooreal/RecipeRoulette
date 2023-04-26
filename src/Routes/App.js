import './App.css';
import { Link } from "react-router-dom"
import { useState } from 'react'
import Dropdown from '../Dropdown'

function App() {
  const cuisine_options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "american", label: "American" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        Recipe Roulette
      </header>
      
      <div>
        <h4>Cuisine Type</h4>
          


        <Dropdown placeholder="Select..." options={cuisine_options}/>
      </div>

      <div>
        <h4>Meal Type</h4>
       
      </div>

      <div>
        <h4>Time</h4>
      </div>

      <div>
        <Link to="/results">
          <button>Generate</button>
        </Link>
      </div>
    </div>
  );
}

export default App;




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