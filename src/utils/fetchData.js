export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '1bb3eaa827msh4dcfa512ff64662p14724cjsn4dbbf6286175',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const fetchData = async(url,options)=>{
    const response  = await fetch(url,options);
    const data = await response.json();
    return data;
}

  
