import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

export default function Gif({ id, img }:any) {


  return (
    <div>
      <Link to={`/detail/${id}`}>
        <LazyLoadImage 
        className='w-full object-cover mb-4' 
        key={id} 
        src={img}/>
      </Link>
    </div>
  )
}
