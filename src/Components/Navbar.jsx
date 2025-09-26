import React from 'react'

function Navbar({ favCount }) {
  return (
    <div className='w-full bg-white shadow-md flex px-4 py-3 justify-between items-center'> 
      <h3 className='text-lg font-bold text-orange-600'>Orange</h3>
      <div className='flex px-3 py-1 bg-orange-500 text-white rounded-md text-sm gap-2'>
        <h3>Favourites</h3>

        <h4>{favCount}</h4>
      </div>
    </div>
  )
}

export default Navbar