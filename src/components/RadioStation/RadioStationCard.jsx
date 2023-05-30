import React, { useState } from 'react'
import { urlFor } from "@/lib/client"
import Image from "next/image"


const RadioStationCard = ({
  IsAudioPlaying,
  setIsAudioPlaying,
  setCurrentRadio,
  setLoading,
  setAudioUrl,title,mainImage,audiolink,item}) => {

   
  const handleCardPress = () => {
    setLoading(true)
    setAudioUrl("")
    setCurrentRadio(item)
    setAudioUrl(item.audiolink)
    setIsAudioPlaying(true)
    document.getElementById("Audio").play();
  }
  return (
    <div 
    onClick={() => handleCardPress()}
    className="h-[150px] w-[150px] lg:h-[200px] lg:w-[200px] rounded-lg flex flex-col cursor-pointer hover:scale-110 transition-all ease-in-out">
      <img
      className="h-3/4 w-full object-contain rounded-lg bg-slate-100"
      src={`${urlFor(item.mainImage)}`} alt="img"
      />

      <div className="px-4 py-2 h-1/4">
        <p className="font-semibold text-sm text-white">{item.title}</p>
      </div>
    </div>
  )
}

export default RadioStationCard