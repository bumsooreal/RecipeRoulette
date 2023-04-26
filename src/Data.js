import React, { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState(null);
  let bareURL = "https://api.edamam.com/api/recipes/v2?type=public&app_id=568643a5&app_key=3d4a367835cf13d3a4c15f1d9c02ae80&random";
  useEffect(() => {
    fetch() //add filters for querying
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
      //let formattedUrl = `${weatherUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`  format for concatenating 
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default Data;