import image1 from '../assets/images/lightmode .png'
import image2 from '../assets/images/paperhandimage.png'
import image3 from '../assets/images/Rockhandimage.png'
import image4 from '../assets/images/partyimge.jpg'
import { useState } from 'react'

export default function Rps(){
    const [state,setState] = useState()
    return(
        <section className="flex justify-center py-10  "> 
        <div className=" text-[32px] bg-[#CCCCCC] w-[50%] py-3  rounded-3xl">
            <div className="flex flex-row justify-between px-10" >
            <div className=" font-bold text-[#070A52] font-sans ">Rock Paper Scissors with Compose</div>
            <img src={image1}></img>
           </div>
           <p className="text-lg font-bold text-center py-5">RESET THE TOUR</p>
           
            <div className="flex text-sm font-bold py-8 flex-row justify-between px-20 ">
                <div>PLAYER SCORE:</div>
                <div >COMPUTER SCORE:</div>
            </div>
            <div className=" flex font-bold text-[#AF2D2D] justify-center ">
                <p className="pl-12">
                    YOU WON ! 
                </p>
           <img className="h-[50px] w-[1px] justify-center pr-16" src={image4} ></img>
            </div>
            <div className="flex space-x-20 justify-center font-semibold"> 
                <div><img src={image2}/></div>
                <div className="mt-5">vs</div>
                <div><img src={image3}/></div>
            </div>
            <div className="font-semibold text-sm text-center py-7">Choose your move, rock paper or scissors? </div>
           <div>
           <div className='flex justify-evenly py-4 '>
            <button className="bg-red-500 text-white w-[150px] h-[50px] rounded-[14px] text-lg font-bold">
            ROCK
            </button>
            <button className="bg-red-500 text-white w-[150px] h-[50px] rounded-[14px] text-lg font-bold">
            PAPER
            </button>
            <button className="bg-red-500 text-white w-[150px] h-[50px] rounded-[14px] text-lg font-bold">
            SCISSORS
            </button>
           </div>
           
           </div>
        </div>
        </section> 
    )
}