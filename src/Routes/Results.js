import { Link } from 'react-router-dom'
/*
	Results page after clicking generate

	props should return list of food
*/
function Results(props) {
	return (
		<div className="Results">
			here are ur results
            <div>
                <Link to="/foodprofile">
                    <button>?</button>
                </Link>
            </div>
		</div>
	);
}


export default Results