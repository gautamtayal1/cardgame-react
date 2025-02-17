import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-20 bg-amber-100 flex p-5 justify-between items-center'>
      <h1 className=' text-4xl font-bold  '
      >Memory Game</h1>
      <div className="scoreBox">
        <div className="">Score: 5 </div>
        <div className="">Highest Score: 2</div>
      </div>
    </div>
  )
}

export default Navbar
