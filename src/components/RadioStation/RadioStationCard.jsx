import React, { useState } from 'react'
const nrj = "https://scdn.nrjaudio.fm/mu/55802/aac_64.mp3?cdn_path=adswizz_lbs10&adws_out_b2&access_token=b799f09dab98419ba4e44a14e04caf8c" ;
const radioplus = "https://stream.radio.co/s8cc7a5da4/listen"
const RadioStationCard = ({
  IsAudioPlaying,
  setIsAudioPlaying,
  setAudioUrl,title,mainImage,audiolink}) => {

   
  const handleCardPress = () => {
    setAudioUrl(radioplus)
    setIsAudioPlaying(!IsAudioPlaying)
  }
  return (
    <div 
    onClick={() => handleCardPress()}
    className="h-[150px] w-[150px] lg:h-[200px] lg:w-[200px] rounded-lg flex flex-col cursor-pointer hover:scale-110 transition-all ease-in-out">
      <img
      className="h-3/4 w-full object-cover rounded-lg"
      src={`${mainImage}`}
      />

      <div className="px-4 h-1/4">
        <p className="font-semibold text-lg">{title}</p>
      </div>
    </div>
  )
}

export default RadioStationCard