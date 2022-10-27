import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getGifsId } from '../services/getGif';
import Spinner from '../components/Spinner';

export default function Detail() {

  let {id} = useParams()

  const { data, isLoading } = useQuery(["gif", id],()=> getGifsId({ id: id }))
  
  if (isLoading) return (<Spinner/>)

  return (
    <div className='p-4 flex justify-center'>
      <img src={data.images.downsized.url} alt="" />
    </div>
  )
}
