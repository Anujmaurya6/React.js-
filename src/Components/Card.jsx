import React from 'react'

function Card({ data, handleClick, index }) {
  const { image, artist, added, name } = data;

  return (
    <div className="w-60 bg-zinc-200 p-4 rounded-md shadow-md flex flex-col items-center pb-12 relative mt-10">
      <div className="w-28 h-28 bg-orange-600 rounded-md overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          src={image} 
          alt={name} 
        />
      </div>

    
      <div className="mt-3 text-center">
        <h3 className="text-lg font-bold truncate">{name}</h3>
        <h6 className="text-sm text-gray-600">{artist}</h6>
      </div>

      <button 
        onClick={() => handleClick(index)}
        className={`px-4 py-2 font-semibold absolute text-sm text-white 
          left-1/2 -translate-x-1/2 bottom-2 rounded-full shadow-md transition-all duration-300 
          ${added ? "bg-green-600 hover:bg-green-700" : "bg-orange-500 hover:bg-orange-600"}`}
      >
        {added ? "Added" : "Add to Favourites"}
      </button>
    </div>
  )
}

export default Card