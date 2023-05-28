import React from 'react'
import Title from "./Components/Title"
import StopBtnRadio from "./Components/StopBtnRadio"

const MiniPlayer = ({IsAudioPlaying,setAudioPlaying}) => {




  return (
    <div className="fixed bottom-0 left-0 w-full h-16 lg:h-24 border-t border-black bg-[#232427] flex justify-evenly ">
  
     <Title/>
     <StopBtnRadio 
     IsAudioPlaying={IsAudioPlaying}
     setAudioPlaying={setAudioPlaying}/>
     </div>
  )
}

export default MiniPlayer