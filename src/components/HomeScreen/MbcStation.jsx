import React from 'react'
import RadioStationCard from "../RadioStation/RadioStationCard"
const MbcStation = ({
    post,
    setLoading,
    IsAudioPlaying,
    setCurrentRadio,
    setIsAudioPlaying,
    setAudioUrl}) => {

  return (

    <>    
    <h1 className="font-semibold">MBC RADIO STATIONS ❌Currently Not Working</h1>
    <div 
    className="flex flex-wrap items-center justify-center gap-5 lg:gap-10 py-8 px-4 lg:px-52">
    {post && post.map( item => (
      <div key={item.title}>
      <RadioStationCard
      item={item}
      setLoading={setLoading}
      IsAudioPlaying={IsAudioPlaying}
      setCurrentRadio={setCurrentRadio}
      setIsAudioPlaying={setIsAudioPlaying}
      setAudioUrl={setAudioUrl}/>
      </div>
      ))}
    </div>
    </>
  )
}

export default MbcStation