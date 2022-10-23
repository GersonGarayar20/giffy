const apiKey = "MG7rcH8uoGjGb6hEUwGHbZCNN8983UUd"
const apiUrl = "https://api.giphy.com/v1"

const getGifs = ({keyword}:{keyword:string | undefined}) => {
  
  if (keyword === "") keyword = "sasuke"

  const url = `${apiUrl}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  return fetch(url)
  .then(res=>res.json())
  .then(json=> json.data)


}

const getGifsId = ({id}:{id:string | undefined}) => {
  
  if (id === "") id = "sasuke"

  const url = `${apiUrl}/gifs/${id}?api_key=${apiKey}`
  return fetch(url)
  .then(res=>res.json())
  .then(json=> json.data)


}


export {getGifs, getGifsId}