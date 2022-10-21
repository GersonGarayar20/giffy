import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Main() {

  const [value, setValue] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    value && navigate(value)
  }

  return (
    <div className='bg-neutral-900 h-full'>
      <h1 className='text-white'>GIFFY</h1>
      <form className='flex justify-center' onSubmit={handleSubmit}>
        <input className='bg-neutral-50/90 w-96 outline-none py-2 px-4 rounded-full' value={value} onChange={e=>setValue(e.target.value)} type="search" placeholder='Busca un git...'/>
      </form>
      <section>
        <Outlet/>
      </section>
    </div>
  )
}
