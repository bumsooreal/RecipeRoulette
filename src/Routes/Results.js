import { Link, useLocation } from 'react-router-dom'
import getData from '../GetData.js'
/*
	Results page after clicking generate

	props should return list of food
*/
function Results(props) {
	const location = useLocation();
	const data = location.state;
	
	const allRecipes = getData(data)

	console.log(allRecipes);

	
	//const recipeName = allRecipes.

	return (
		<div className="Results">
			here are ur results


            <div>
                <Link to="/foodprofile">
                    <button>
						<div>
							
						</div>

					</button>
                </Link>
            </div>
		</div>
	);
}


export default Results