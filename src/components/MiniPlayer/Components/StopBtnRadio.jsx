import React, { useState } from 'react'
import {IoStop} from "react-icons/io5"
import {IoMdPlay} from "react-icons/io"
import {CgMediaLive} from "react-icons/cg"

const StopBtnRadio = ({IsAudioPlaying,setIsAudioPlaying,setAudioUrl}) => {


    const handlePlay= () => { 
      setIsAudioPlaying(!IsAudioPlaying)
  
  }

  const handlePausefunc = () => {
    document.getElementById("Audio").pause();
  }
  const handlePlayfunc = () => {
    document.getElementById("Audio").play();
  }


  return (
    
    <div className="h-full flex items-center gap-2 justify-around">
    {IsAudioPlaying ? 
    <button
    onClick={() => {handlePlay(),handlePausefunc()}}
    className="text-lg text-red-500">
        <IoStop/>
    </button>
    :
    <button
    onClick={() => {handlePlay(),handlePlayfunc()}}
    className="text-xl text-white">
        <IoMdPlay/>
    </button>
    }

     <div className="flex items-center gap-1">
        <p className="text-xs animate-pulse text-red-500">
        <CgMediaLive/>
        </p>
        <p className="text-[8px] text-white">Live</p>
        </div>
    </div>
  )
}

export default StopBtnRadio