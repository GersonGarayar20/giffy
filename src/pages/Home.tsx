import { Outlet, Link } from 'react-router-dom';
import Buscador from '../components/Buscador';

export default function Main() {

  return (
    <div className='bg-neutral-900 h-full'>
      <Link to="/">
        <h1 className='text-white text-center p-2 font-bold text-lg'>GIFFY</h1>
      </Link>
      <Buscador/>
      <Outlet/>
    </div>
  )
}
