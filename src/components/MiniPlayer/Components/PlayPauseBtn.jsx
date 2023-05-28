import React, { useState } from 'react'
import {IoMdPlay} from "react-icons/io"
import {IoPause} from "react-icons/io5"
import {CgMediaLive} from "react-icons/cg"
const PlayPauseBtn = () => {

    const [IsPlaying,setIsPlaying] = useState(false)

    const handlePlay = () => {
        setIsPlaying(!IsPlaying)
    }

  return (
    <div className="h-full flex items-center gap-2 justify-around">
        {!IsPlaying ?
        <button 
        onClick={() => handlePlay()}
        className="text-2xl">
            <IoMdPlay/>
        </button>
        :
        <button
        onClick={() => handlePlay()}
        className="text-2xl">
            <IoPause/>
        </button>
        }


        <div className="flex items-center gap-1">
        <p className="text-xs animate-pulse text-red-500">
        <CgMediaLive/>
        </p>
        <p className="text-xs">
        Live</p>
        </div>
    </div>
  )
}

export default PlayPauseBtn