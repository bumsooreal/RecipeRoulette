let bareURL = "https://api.edamam.com/api/recipes/v2?type=public&app_id=568643a5&app_key=3d4a367835cf13d3a4c15f1d9c02ae80&random=true";

async function apiCall(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data
}

async function getData(properties) {
  let formattedUrl = bareURL; //add the user input options into the bareURL
  
  for (const key in properties) {
    const value = properties[key];
    formattedUrl += `&${key}=${value}`
  }
  // console.log(formattedUrl);
  
  // //.then((data) => {updateData(data)}).catch((error) => {console.log(error)})
  // let waiting = await apiCall(formattedUrl); 
  // console.log(waiting);
  
  
  return apiCall(formattedUrl);
}

export default getData;