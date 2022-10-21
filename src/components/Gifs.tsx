import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getGit } from '../services/getGif'
import { useParams }from 'react-router-dom';
import {useEffect} from 'react';

export default function Main() {

  const {data, isLoading, refetch} = useQuery(["gifs"],()=> getGit({ keyword: params.name }),{
    onSuccess: ()=>{
      queryClient.invalidateQueries(["users"])
    }
  })

  const queryClient = useQueryClient()

  const params = useParams()

  useEffect(() => {
    
    refetch()

  }, [params])
  


  if (isLoading) <p>cargando</p>


  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 max-w-7xl m-auto'>
      {
        data?.map((el:any)=>(
          <img className='w-full object-cover' key={el.id} src={el.images.original.url} alt="" />
        ))
      }
    </div>
  )
}