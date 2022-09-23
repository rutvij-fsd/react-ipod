import React from 'react'
import next from '../Assets/Images/next.png'
import play_pause from '../Assets/Images/play-pause.png'
const Ipod = () => {
  return (
    // Main Outer Div
    <div className='box-border h-72 w-36 bg-slate-400 mt-36 m-auto flex flex-col'>
        {/* Display Div */}
        <div className='box-border h-36 w-36 flex flex-col  bg-slate-200'></div>
        {/* Controller Div */}
        <div className='box-border h-36 w-36 flex flex-col  bg-slate-300 justify-center items-center '>
            <div className='rounded-full bg-white h-32 w-32 flex flex-col justify-center items-center relative'>
                <div className='rounded-full bg-slate-300 h-12 w-12 '>
                    <img className='h-6 absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer' src={next} />
                    <img className='h-6 absolute left-3 top-[50%] translate-y-[-50%] rotate-180 cursor-pointer' src={next} />
                    <img className='h-5 absolute bottom-3 left-[50%] translate-x-[-50%] cursor-pointer' src={play_pause} />
                    <div className='h-5 absolute top-3 left-[50%] translate-x-[-50%] font-bold cursor-pointer'>MENU</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ipod