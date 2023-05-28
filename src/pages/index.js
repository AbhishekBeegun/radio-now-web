import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TopBanner from "@/components/HomeScreen/Banner/TopBanner";
import RadioStationCard from "@/components/RadioStation/RadioStationCard";
import MiniPlayer from "@/components/MiniPlayer/MiniPlayer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  const router = useRouter();
  return (
   <main className="flex flex-col items-center py-2">
    {/* <TopBanner/> */}
    <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-10 py-8 px-4 lg:px-52">
    {arr.map( item => (
      <RadioStationCard/>
      ))}
    </div>

    <MiniPlayer/>
   </main>
 
  )
}
