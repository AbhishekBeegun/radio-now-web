import React from 'react'
import RadioStationCard from "../RadioStation/RadioStationCard"

const Station = ({
    post,
    setLoading,
    IsAudioPlaying,
    setCurrentRadio,
    setIsAudioPlaying,
    setAudioUrl}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-10 py-8 px-4 lg:px-52">
    {post && post.map( item => (
      <div key={item.slug}>
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
  )
}

export default Station