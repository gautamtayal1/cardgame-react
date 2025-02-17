import { useState } from 'react'
import { useFetchAPI } from '../utils/FetchAPI'

const Body = () => {

  const cardData = useFetchAPI()
  const [id, setId] = useState([])
  const [score, setScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)
  console.log(id);
  console.log(score)
  
  function switchPosition() {
    // Fisher-Yates Shuffle Algorithm
    for (let i = cardData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardData[i], cardData[j]] = [cardData[j], cardData[i]];
    }
  }

  function clickHandler(selectedId){
    switchPosition()
    if(id.includes(selectedId)){
      setScore(0);
      setId([])
      if(highestScore < score) {
        setHighestScore(score)
      }
    } else {
      setId((prev) => [...prev, selectedId])
      setScore((score) => score + 1)
    }
  } 

  return (
    <div className='p-7 flex flex-wrap gap-12'>
      <div className="scoreBox flex h-15 w-[100vw] gap-3">
        <div className="bg-yellow-400 p-5 rounded-2xl">Score: {score} </div>
        <div className="bg-green-600 p-5 rounded-2xl text-white">Highest Score: {highestScore}</div>
      </div>
      {cardData.map((data) => (
        <div 
          key={data.id} 
          className="box h-[35vh] w-[20vw] hover:shadow-gray-400 cursor-pointer"
          onClick={() => clickHandler(data.id)}
        >
          <img src={data.images.original.url} alt={data.title} 
          className=' object-cover w-[100%] h-[100%] '/>
        </div>
      ))}
      
    </div>
  )
}

export default Body
