import React from 'react'
import Title from "./Components/Title"
import PlayPauseBtn from "./Components/PlayPauseBtn"

const MiniPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 lg:h-28 border-t border-black bg-[#232427] flex justify-evenly ">
  
     <Title/>

     <PlayPauseBtn/>
     </div>
  )
}

export default MiniPlayer