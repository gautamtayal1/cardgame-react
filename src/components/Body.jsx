import React from 'react'
import { useFetchAPI } from '../utils/FetchAPI'

const Body = () => {

  const cardData = useFetchAPI()

  return (
    <div className='p-10 flex flex-wrap gap-7'>
      {cardData.map((data) => (
        <div key={data.id} className="box h-[35vh] w-[20vw] bg-amber-500">
          <img src={data.images.original.url} alt={data.title} />
        </div>
      ))}
    </div>
  )
}

export default Body
