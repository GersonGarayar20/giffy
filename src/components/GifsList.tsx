import { useQuery } from '@tanstack/react-query'
import { getGifs } from '../services/getGif'
import { useEffect } from 'react';
import Spinner from './Spinner';

import { useParams } from 'react-router-dom';
import Gif from './Gif';


export default function Main() {

  let {name} = useParams()

  const {data, isLoading, refetch } = useQuery(["gifs", name],()=> getGifs({ keyword: name }))

  useEffect(() => {
    refetch()
  }, [name])
  

  if (isLoading) return (<Spinner/>)
  if (data.length===0) return (<p className='text-white h-screen flex justify-center items-center'>no se encontro ningun resultado</p>)

  return (
    <div className='xl:columns-5 lg:columns-4 md:columns-3 columns-2 p-4 max-w-7xl m-auto'>
      {
        data?.map((el:any)=>(
          <Gif key={el.id} id={el.id} img={el.images.downsized.url} />
        ))
      }
    </div>
  )
}

