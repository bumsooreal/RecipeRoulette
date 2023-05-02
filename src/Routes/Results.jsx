import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import getData from '../GetData.js'
import Loader from "react-spinners/PacmanLoader"
import './Results.css'
/*
	Results page after clicking generate

	props should return list of food
*/
function Results(props) {
	const location = useLocation();
	const properties = location.state;
	const [data, setData] = useState(null)
	const [topHits, setTopHits] = useState(null); //tophits is an array of atmost 3 options to choose from 
	

	useEffect(() => {
		const fetchAndSet = async () => {
			const response = await getData(properties);
			const hits = response['hits'];
			if (hits == null) {
				setData(false);
				return;
			}

			let options = [];
			let i = 0;
			
			while (i <= 2 && Boolean(hits[i]) ) {
				options[i] = hits[i];
				i++;
			}

			setData(response);
			setTopHits(options);
		}
		fetchAndSet();
	}, [properties]);
	
	
	
//need to find a way to put each set of data into a div and have it format such that if there is 3 2 or 1 piece of data then itll still work
	console.log(topHits)


	return (
		data == null ? 
		<main className='Loading-Container'>
            <div className="Loading">
                <Loader
                    color={"#06c168"}
                    loading={data==null}
                    size={325}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </main>
		:
		data == false ?
		<main className='Results'>
			<h1>Oops the combination you were looking for DOES NOT EXIST!! D:</h1>
			<Link to="/" state={properties}>
				<button id="generate-btn"> Go Back </button>
			</Link>
		</main>
		:
		<div>
			<Link to="/">
                <header className="App-header">
				    Recipe Roulette
		        </header>
            </Link>
			<body>
				<div className="Results">
					<h1>here are ur results</h1>
					<h4>enjoy:D</h4>
				
					<div className='OptionContainer'>	
					{topHits ?
						topHits.map((hit) => {
							return <Link  to="/foodprofile"  state={hit} >
									<div className="Option" > 
										<img className='Image' src={hit['recipe']['image']} alt= 'Recipe Image' />
										
										<div className='Caption'> { hit['recipe']['label'].replace("Recipe", '').replace('!',"").replace("recipes",'')} </div>
									
									</div>
									</Link>
						})			
						:
						<div>Loading...</div>
					}

					</div>

				</div>
			</body>
		</div>
	);
}


export default Results