import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getGifsId } from '../services/getGif';
import Spinner from '../components/Spinner';

import {useEffect} from 'react';



export default function Detail() {

  let {id} = useParams()

  const { data, isLoading } = useQuery(["gif", id],()=> getGifsId({ id: id }))
  const queryClient = useQueryClient()
  
  
  const cache:any = queryClient.getQueriesData(["gifs"])
  if (cache.length !== 0) {
    const gif = cache[0][1]
    const obj = gif.find((el:any)=>el.id === id)
    return(<img src={obj.images.downsized.url} alt="" />)
  }
  

  if (isLoading) return (<Spinner/>)

  return (
    <div>
      <img src={data.images.downsized.url} alt="" />
    </div>
  )
}
