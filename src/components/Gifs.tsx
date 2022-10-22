import { useQuery, useQueryClient} from '@tanstack/react-query'
import { getGit } from '../services/getGif'
import {useEffect} from 'react';
import Spinner from './Spinner';
import {LazyLoadImage} from 'react-lazy-load-image-component';


export default function Main({value}:any) {

  const {data, isLoading, refetch, } = useQuery(["gifs", value],()=> getGit({ keyword: value }),{
    onSuccess: ()=>{
      queryClient.invalidateQueries(["users"])
    }
  })

  console.log(data)
  const queryClient = useQueryClient()

  useEffect(() => {
    refetch()
  }, [value])
  
  if (isLoading) return (<Spinner/>)
  if (data.length===0) return (<p className='text-white h-screen flex justify-center items-center'>no se encontro ningun resultado</p>)

  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 max-w-7xl m-auto'>
      {
        data?.map((el:any)=>(
          <LazyLoadImage className='w-full object-cover' key={el.id} src={el.images.original.url} alt="" />
        ))
      }
    </div>
  )
}

