import React from 'react'

const msg = ()=>{alert("Booked")}
const message=()=>{alert("removed your item")}

const data = [
  {
    image: "https://images.unsplash.com/photo-1757416654883-c73c67b3382b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    name: "sofa",
    description: "sofa is cruscent and good to sit"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1755882951654-3e598b215636?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    name: "Flower",
    description: "flower small good"
  },
  {
    image: "https://images.unsplash.com/photo-1758002253582-fbebc2341503?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    name: "Paris",
    description: "Eiffel tower is in the France city of paris"
  },
]

function Card() {
  return (
    <div className="w-full min-h-screen bg-zinc-300 flex items-center justify-center gap-10">
      {data.map((elem, index) => (
        <div key={index} className="w-72 bg-zinc-600 rounded-md overflow-hidden shadow-lg">
          {/* Image section */}
          <div className="w-full h-40">
            <img
              src={elem.image}
              alt={elem.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content section */}
          <div className="w-full px-3 py-3 text-white ">
            <div className=' flex items-center justify-center gap-5'>
              <button onClick={msg} className='h-9 w-20 bg-green-400 rounded-md font-bold '>Book Now</button>
             <button onClick={message} className='h-9 w-20 bg-red-400 rounded-md font-bold'>Remove</button>
            </div>
            <h2 className="text-lg font-bold">{elem.name}</h2>
            <p className="text-sm text-zinc-300">{elem.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
