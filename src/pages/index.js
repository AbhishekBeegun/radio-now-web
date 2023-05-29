
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import TopBanner from "@/components/HomeScreen/Banner/TopBanner";
import MiniPlayer from "@/components/MiniPlayer/MiniPlayer";
import { useEffect, useState } from "react";
import { client } from "@/lib/client";
import Station from "@/components/HomeScreen/Station";
import MbcStation from "@/components/HomeScreen/MbcStation";
import { MediaOutlet, MediaPlayer } from '@vidstack/react';
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

  const Home = ({post,mbcpost}) => {
  const router = useRouter();

  const [AudioUrl , setAudioUrl] = useState()

  const [AudioMBCUrl , setAudioMBCUrl] = useState("https://radio.mbconline.xyz/hls/koolfm.m3u8")

  const [currentRadio,setCurrentRadio] = useState("")

  const [Loading,setLoading] = useState(Boolean)

  const [IsAudioPlaying , setIsAudioPlaying] = useState(false)
  
  return (
   <main className="flex flex-col items-center pb-10 bg-[#232427] ">

    <Head>
      <title>Radio Now - Beta</title>
      <meta name="description" content="Radio Now - BETA - WEB" />
      <link rel="icon" href="./logo.png" />
    </Head>
    {/* <TopBanner/> */}
    <Station
    post={post}
    setLoading={setLoading}
    IsAudioPlaying={IsAudioPlaying}
    setCurrentRadio={setCurrentRadio}
    setIsAudioPlaying={setIsAudioPlaying}
    setAudioUrl={setAudioUrl}
    />

    <MbcStation
    post={mbcpost}    
    setLoading={setLoading}
    IsAudioPlaying={IsAudioPlaying}
    setCurrentRadio={setCurrentRadio}
    setIsAudioPlaying={setIsAudioPlaying}
    setAudioUrl={setAudioUrl}
    />

    <MiniPlayer
    Loading={Loading}
    currentRadio={currentRadio}
    setAudioUrl={setAudioUrl}
    IsAudioPlaying={IsAudioPlaying}
    setIsAudioPlaying={setIsAudioPlaying}/>

    <audio
    id = "Audio"
    onPlay={() => setLoading(false)}
    autoPlay
    src={AudioUrl}>
    </audio>
   {/* <video
   src={AudioMBCUrl}
   autoPlay
   >

   </video> */}
   </main>
 
  )
}

export default Home


export async function getStaticProps() {
  const post = await client.fetch('*[_type == "post" && categories[0]._ref == "3beb6224-3fab-4903-a767-544e3b4d465d"]')
  const mbcpost = await client.fetch('*[_type == "post" && categories[0]._ref == "37888c14-c9e6-4347-aad4-758c36c53725"]')
  return{
    props : {
      post,
      mbcpost
    }
  }
}


