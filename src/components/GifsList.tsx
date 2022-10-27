import { useInfiniteQuery } from '@tanstack/react-query'
import { getGifs } from '../services/getGif'
import { useEffect } from 'react';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';
import Gif from './Gif';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Main() {

  let {name} = useParams()
  const {data, isLoading, hasNextPage, fetchNextPage, refetch } = useInfiniteQuery(["gifs", name],
  ({pageParam = 0})=> {
    return getGifs({ keyword: name, page:pageParam })
  },
  {
    getNextPageParam: (lastPage)=>{
      if (lastPage.page === lastPage.total_paginas) return false
      return lastPage.page +1;
    }
  })

  useEffect(() => {
    refetch()
  }, [name])
  
  const gifs = data?.pages.reduce((prev, curr)=> prev.concat(curr.result), []) ?? []

  if (isLoading) return (<Spinner/>)
  if (gifs.length===0) return (<p className='text-white h-screen flex justify-center items-center'>no se encontro ningun resultado</p>)

  return (
      <InfiniteScroll
      className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 p-4 gap-4 max-w-7xl w-full m-auto'
      dataLength={gifs.length}
      next={()=>fetchNextPage()}
      hasMore={hasNextPage ?? isLoading}
      loader={<Spinner/>}
      >
        {
          gifs.map(({id, images}:any)=>(
            <Gif key={id} id={id} img={images.downsized.url} />
          ))
        }
      </InfiniteScroll>
  )
}

