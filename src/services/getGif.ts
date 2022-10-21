const apiKey = "MG7rcH8uoGjGb6hEUwGHbZCNN8983UUd"

const getGit = ({keyword}:any) => {
  

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  return fetch(url)
  .then(res=>res.json())
  .then(json=> json.data)


}

export {getGit}