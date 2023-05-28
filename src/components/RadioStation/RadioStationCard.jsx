import React from 'react'

const RadioStationCard = () => {
  return (
    <div className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] rounded-lg flex flex-col hover:scale-110 transition-all ease-in-out">
      <img
      className="h-3/4 w-full object-cover rounded-lg"
      src="https://static.wixstatic.com/media/49f14e_f1a4922de335415e9837a8efb03bb9cff000.jpg/v1/fill/w_1152,h_649,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/49f14e_f1a4922de335415e9837a8efb03bb9cff000.jpg"
      />

      <div className="px-4 h-1/4">
        <p className="font-semibold text-xl">NRJ Maurice</p>
      </div>
    </div>
  )
}

export default RadioStationCard