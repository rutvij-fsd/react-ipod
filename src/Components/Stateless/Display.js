import React from 'react'
import arrow from '../Assets/Images/arrow.png'


const Display = (props) => {
  return (
    <div>
        {/* side nav bar */}
        <div className='box-border h-48 w-32 bg-blue-200'>
            <h1 className='p-3'>IPOD</h1>
            <div className='flex flex-col items-start  font-bold justify-evenly h-36'>
                <div></div>
                <div className={`${props.activeItem==='Music'? 'bg-blue-500 ':'' }flex justify-between p-1 items-center w-full`} >
                    <p>Music</p>
                    {props.activeItem==='Music'? <img src={arrow} className='h-3'/>:'' }

                </div>
                <div className={`${props.activeItem==='Games'? 'bg-blue-500 ':'' }flex justify-between p-1 items-center w-full`}>
                    <p>Games</p>
                    {props.activeItem==='Games'? <img src={arrow} className='h-3'/>:'' }
                </div>
                <div className={`${props.activeItem==='Playlist'? 'bg-blue-500 ':'' }flex justify-between p-1 items-center w-full`}>
                    <p>Playlist</p>
                    {props.activeItem==='Playlist'? <img src={arrow} className='h-3'/>:'' }
                </div>
                <div className={`${props.activeItem==='Settings'? 'bg-blue-500 ':'' }flex justify-between p-1 items-center w-full`}>
                    <p>Settings</p>
                    {props.activeItem==='Settings'? <img src={arrow} className='h-3'/>:'' }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Display