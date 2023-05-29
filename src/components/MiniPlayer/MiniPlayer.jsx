import React from 'react'
import Title from "./Components/Title"
import StopBtnRadio from "./Components/StopBtnRadio"
import {AiOutlineLoading3Quarters} from "react-icons/ai"

const MiniPlayer = ({IsAudioPlaying,setIsAudioPlaying,setAudioUrl,currentRadio,Loading}) => {

  return (
    <div className="fixed bottom-0 left-0 w-full h-16 lg:h-24 border-t border-black bg-[#232427] flex justify-evenly items-center ">
  
     <Title
     title={currentRadio?.title}
     image={currentRadio?.mainImage}/>
     <StopBtnRadio 
     setAudioUrl={setAudioUrl}
     IsAudioPlaying={IsAudioPlaying}
     setIsAudioPlaying={setIsAudioPlaying}/>

     {Loading ? 
     <AiOutlineLoading3Quarters className="animate-spin" />
  
     : null}

     </div>
  )
}

export default MiniPlayer