import { useState } from 'react';

import Gifs from './Gifs';

export default function Main() {

  const [value, setValue] = useState("")

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className='bg-neutral-900 h-full'>
      <h1 className='text-white text-center p-2 font-bold text-lg'>GIFFY</h1>
      <form className='flex justify-center px-4' onSubmit={handleSubmit}>
        <input className='bg-neutral-50/80 md:w-96 w-full outline-none py-2 px-4 rounded-full' value={value} onChange={e=>setValue(e.target.value)} type="search" placeholder='Busca un git...'/>
      </form>
      <Gifs value={value}/>
    </div>
  )
}
