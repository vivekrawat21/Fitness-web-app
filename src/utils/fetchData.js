export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '2fd8c6733amsh318f79c96cc5087p128c61jsn3337a3caa29b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

    }
  };
   export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1bb3eaa827msh4dcfa512ff64662p14724cjsn4dbbf6286175',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url,options)=>{
    const response  = await fetch(url,options);
    const data = await response.json();
    return data;
}

  
