const apiKey = "MG7rcH8uoGjGb6hEUwGHbZCNN8983UUd"
const apiUrl = "https://api.giphy.com/v1"


const getGifs = ({keyword = "sasuke", limit = 25, page = 0 }:any) => {
  
  let pagina = page
  let limite = limit

  if (page !== 0) {
    pagina = (page*limit) +1
    limite = limit -1
  }

  const url = `${apiUrl}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limite}&offset=${pagina}&rating=g&lang=en`
  return fetch(url)
  .then(res=>res.json())
  .then(json=>{
    const {data: result, pagination} = json
    const total_paginas = Math.floor(pagination.total_count / limit)

    return { result, page, total_paginas }
  })


}

const getGifsId = ({ id }:any) => {
  
  if (id === "") id = "sasuke"

  const url = `${apiUrl}/gifs/${id}?api_key=${apiKey}`
  return fetch(url)
  .then(res=>res.json())
  .then(json=> json.data)


}


export {getGifs, getGifsId}