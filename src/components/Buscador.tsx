import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Buscador() {

  const input = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const texto = input.current?.value
    texto
    ? navigate(`/search/${texto}`)
    : navigate("/")
  }

  return (
    <form className='flex justify-center px-4' onSubmit={handleSubmit}>
      <input ref={input} className='bg-neutral-50/80 md:w-96 w-full outline-none py-2 px-4 rounded-full' type="search" placeholder='Busca un gif...'/>
    </form>
  )
}
