import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TopBanner from "@/components/HomeScreen/Banner/TopBanner";
import RadioStationCard from "@/components/RadioStation/RadioStationCard";
import MiniPlayer from "@/components/MiniPlayer/MiniPlayer";
import ReactAudioPlayer from 'react-audio-player';
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  const router = useRouter();

  let [AudioUrl , setAudioUrl] = useState()

  const [IsAudioPlaying , setIsAudioPlaying] = useState(false)

  const handlePausefunc = () => {
    document.getElementById("Audio").pause();
  }
  const handlePlayfunc = () => {
    document.getElementById("Audio").play();
  }

  return (
   <main className="flex flex-col items-center py-20   bg-[#232427] ">
    {/* <TopBanner/> */}
    <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-10 py-8 px-4 lg:px-52">
    {arr && arr.map( item => (
      <RadioStationCard
      title={"NRJ Maurice"}
      mainImage={"https://static.wixstatic.com/media/49f14e_f1a4922de335415e9837a8efb03bb9cff000.jpg/v1/fill/w_1152,h_649,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/49f14e_f1a4922de335415e9837a8efb03bb9cff000.jpg"}
      IsAudioPlaying={IsAudioPlaying}
      setIsAudioPlaying={setIsAudioPlaying}
      setAudioUrl={setAudioUrl}/>
      ))}
    </div>

    <MiniPlayer
    IsAudioPlaying={IsAudioPlaying}
    setAudioPlaying={setIsAudioPlaying}/>

    <audio
    id = "Audio"
    autoPlay={IsAudioPlaying}
    src={AudioUrl}>
    </audio>
   </main>
 
  )
}
