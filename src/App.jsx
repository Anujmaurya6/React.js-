import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

function App() {
  const data = [
    { image:"https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?q=80&w=687", name:"Blue water", artist:"Honey singh", added:false },
    { image:"https://images.unsplash.com/photo-1532983330958-4b32bbe9bb0e?q=80&w=2070", name:"Sunset", artist:"Taylor swift", added:false },
    { image:"https://plus.unsplash.com/premium_photo-1669839774770-df5a3d2da257?q=80&w=1976", name:"Love u Zindagi", artist:"Alia bhatt", added:false },
    { image:"https://plus.unsplash.com/premium_photo-1680087014917-904bb37c5191?q=80&w=735", name:"Water Glass", artist:"Mia khalifa", added:true },
  ]

  const [songdata, setSongdata] = useState(data);


  const handleClick = (index) => {
    const updated = [...songdata];
    updated[index].added = !updated[index].added;

    if(updated[index].added){
      alert(`${updated[index].name} added to favourites ✅`);
    } else {
      alert(`${updated[index].name} removed from favourites ❌`);
    }

    setSongdata(updated);
  }

  const favCount = songdata.filter(song => song.added).length;

  return (
    <div className='w-full h-screen bg-zinc-300'>

      <Navbar favCount={favCount} />
      
      <div className='flex gap-4 items-center justify-center mt-6'>
        <div className='px-20 flex gap-10 mt-10 flex-wrap'>
          {songdata.map((obj, index) => (
            <Card 
              key={index} 
              index={index} 
              handleClick={handleClick} 
              data={obj}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App