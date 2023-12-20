"use client"
import Image from 'next/image'
import { useState, useEffect  } from 'react';
import data  from "../api/data.json"


export default function Home() {
  const [state,setState] = useState("Week")
  
  
  
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className=' md:py-0 pt-10 flex space-x-0 md:space-x-4 flex-col md:flex-row md:h-auto h-full'>
        <div className=' flex flex-col rounded-lg bg-custom-200 w-[320px] md:w-36 min-[940px]:w-48' >
          <div className=' flex flex-row  md:flex-col bg-custom-blue md:p-5 rounded-lg p-5 md:pb-10 '>
            <Image
            width={60}
            height={60}
            alt='jeremy'
            className=' w-[60px] h-[60px] border-2 border-white rounded-full'
            src={"/images/image-jeremy.png"}/>
            <div className=' mt-0 md:mt-7 justify-center md:ml-0 ml-5 flex flex-col'>
              <div className=' text-[0.6rem] text-custom-400'>
                Report for
              </div>
              <div className=' text-white flex flex-row md:flex-col'>
                <div className='text-xl md:text-2xl font-extralight'>
                  Jeremy
                </div>
                <div className='md:ml-0 ml-2 text-xl md:text-2xl font-extralight'>
                  Robson
                </div>
              </div>
            </div>
          </div>
          <div className=' flex flex-row justify-around md:justify-normal md:flex-col px-5 space-y-0 md:space-y-4 py-3 text-white  '>
            <div onClick={()=>{setState("Day")}} className={state === "Day" ? "s" : "u"}>
              Daily 
            </div>
            <div onClick={()=>{setState("Week")}} className={state === "Week" ? "s" : "u"}>
              Weekly
            </div>
            <div onClick={()=>{setState("Month")}} className={state === "Month" ? "s" : "u"}>
              Monthly
            </div>
          </div>
        </div>
        <div className=' md:mt-0 mt-4 flex flex-col space-y-4'>
          <div className=' bg-custom-work rounded-lg w-[320px] md:w-36 min-[940px]:w-48 h-32 md:h-40 relative  bg-work bg-right-top-4 bg-no-repeat'>
            <div className=' flex flex-col absolute bottom-0 left-0 hover:cursor-pointer  w-full rounded-lg  hover:bg-custom-500 bg-custom-200  text-white p-5'>
              <div className=' flex flex-row justify-between'>
                <div className='  text-xs'>
                 {data[0].title}
                </div>
                <div  className=' hover:cursor-pointer w-5'>
                  <Image
                  width={21}
                  height={5}
                  alt='setting'
                  className=' w-full'
                  src={"/images/icon-ellipsis.svg"}/>
                </div>
                
              </div>
              <div className=' flex flex-row md:justify-normal justify-between md:flex-col'>
                <div className=' mt-0 md:mt-5 text-3xl font-extralight'>
                  {
                     state === "Day" ? data[0].timeframes.daily.current :(state === "Week" ? data[0].timeframes.weekly.current : ( state === "Month"  ? data[0].timeframes.monthly.current : "" ))
                  }
                  hrs
                </div>
                <div className=' text-[0.6rem]  items-center flex text-custom-400'>
                  Last {state} - {
                     state === "Day" ? data[0].timeframes.daily.previous :(state === "Week" ? data[0].timeframes.weekly.previous : ( state === "Month"  ? data[0].timeframes.monthly.previous : "" ))
                  } hrs
                </div>
              </div>
            </div>
          </div>
          <div className=' bg-custom-exercise rounded-lg w-[320px] md:w-36 min-[940px]:w-48 h-32 md:h-40 relative  bg-exercise bg-right-top bg-no-repeat'>
            <div className=' flex flex-col absolute bottom-0 left-0 w-full rounded-lg hover:cursor-pointer hover:bg-custom-500 bg-custom-200  text-white p-5'>
              <div className=' flex flex-row justify-between'>
                <div className='  text-xs'>
                {data[1].title}
                </div>
                <div className=' w-5'>
                  <Image
                  width={21}
                  height={5}
                  alt='setting'
                  className=' hover:cursor-pointer w-full'
                  src={"/images/icon-ellipsis.svg"}/>
                </div>
                
              </div>
              <div className='flex flex-row md:justify-normal justify-between md:flex-col'>
                <div className=' mt-0 md:mt-5 text-3xl font-extralight'>
                {state === "Day" ? data[1].timeframes.daily.current :(state === "Week" ? data[1].timeframes.weekly.current : ( state === "Month"  ? data[1].timeframes.monthly.current : "" )) }
                hrs
                </div>
                <div className=' text-[0.6rem] items-center flex text-custom-400'>
                  Last {state} - 
                  {state === "Day" ? data[1].timeframes.daily.previous :(state === "Week" ? data[1].timeframes.weekly.previous : ( state === "Month"  ? data[1].timeframes.monthly.previous : "" )) }
               
                  hrs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:mt-0 mt-4  flex flex-col space-y-4'>
          <div className=' bg-custom-play rounded-lg w-[320px] md:w-36 min-[940px]:w-48 h-32 md:h-40 relative  bg-play bg-right-top-4 bg-no-repeat'>
            <div className=' flex flex-col absolute bottom-0 left-0 w-full hover:cursor-pointer rounded-lg hover:bg-custom-500  bg-custom-200  text-white p-5'>
              <div className=' flex flex-row justify-between'>
              <div className='  text-xs'>
                {data[2].title}
                </div>
                <div className='hover:cursor-pointer w-5'>
                  <Image
                  width={21}
                  height={5}
                  alt='setting'
                  className=' w-full'
                  src={"/images/icon-ellipsis.svg"}/>
                </div>
                
              </div>
              <div className='flex flex-row md:justify-normal justify-between md:flex-col'>
                <div className=' mt-0 md:mt-5 text-3xl font-extralight'>
                {state === "Day" ? data[2].timeframes.daily.current :(state === "Week" ? data[2].timeframes.weekly.current : ( state === "Month"  ? data[2].timeframes.monthly.current : "" )) }
                hrs
                </div>
                <div className=' text-[0.6rem] items-center flex text-custom-400'>
                  Last {state} - 
                  {state === "Day" ? data[2].timeframes.daily.previous :(state === "Week" ? data[2].timeframes.weekly.previous : ( state === "Month"  ? data[2].timeframes.monthly.previous : "" )) }
               
                  hrs
                </div>
              </div>
            </div>
          </div>
          <div className=' bg-custom-social rounded-lg w-[320px] md:w-36 min-[940px]:w-48 h-32 md:h-40 relative  bg-social bg-right-top bg-no-repeat'>
            <div className=' flex flex-col absolute bottom-0 left-0 w-full hover:cursor-pointer rounded-lg hover:bg-custom-500  bg-custom-200  text-white p-5'>
              <div className=' flex flex-row justify-between'>
              <div className='  text-xs'>
                {data[3].title}
                </div>
                <div className=' w-5'>
                  <Image
                  width={21}
                  height={5}
                  alt='setting'
                  className='hover:cursor-pointer w-full'
                  src={"/images/icon-ellipsis.svg"}/>
                </div>
                
              </div>
              <div className=' flex flex-row md:justify-normal justify-between md:flex-col'>
                <div className=' mt-0 md:mt-5 text-3xl font-extralight'>
                {state === "Day" ? data[3].timeframes.daily.current :(state === "Week" ? data[3].timeframes.weekly.current : ( state === "Month"  ? data[3].timeframes.monthly.current : "" )) }
                hrs
                </div>
                <div className=' text-[0.6rem] items-center flex text-custom-400'>
                  Last {state} - 
                  {state === "Day" ? data[3].timeframes.daily.previous :(state === "Week" ? data[3].timeframes.weekly.previous : ( state === "Month"  ? data[3].timeframes.monthly.previous : "" )) }
               
                  hrs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:mt-0 md:pb-0 pb-10 mt-4  flex flex-col space-y-4'>
          <div className=' bg-custom-study rounded-lg w-[320px] md:w-36 min-[940px]:w-48 h-32 md:h-40 relative  bg-study bg-right-top-4 bg-no-repeat'>
            <div className=' flex flex-col absolute bottom-0 left-0 w-full rounded-lg hover:cursor-pointer  hover:bg-custom-500 bg-custom-200  text-white p-5'>
              <div className=' flex flex-row justify-between'>
              <div className='  text-xs'>
                {data[4].title}
                </div>
                <div className='hover:cursor-pointer w-5'>
                  <Image
                  width={21}
                  height={5}
                  alt='setting'
                  className=' w-full'
                  src={"/images/icon-ellipsis.svg"}/>
                </div>
                
              </div>
              <div className=' flex flex-row md:justify-normal justify-between md:flex-col'>
                <div className=' mt-0 md:mt-5 text-3xl font-extralight'>
                {state === "Day" ? data[4].timeframes.daily.current :(state === "Week" ? data[4].timeframes.weekly.current : ( state === "Month"  ? data[4].timeframes.monthly.current : "" )) }
                hrs
                </div>
                <div className=' text-[0.6rem] items-center flex text-custom-400'>
                  Last {state} - 
                  {state === "Day" ? data[4].timeframes.daily.previous :(state === "Week" ? data[4].timeframes.weekly.previous : ( state === "Month"  ? data[4].timeframes.monthly.previous : "" )) }
               
                  hrs
                </div>
              </div>
            </div>
          </div>
          <div className='  bg-custom-self rounded-lg w-[320px] md:w-36 min-[940px]:w-48 h-32 md:h-40 relative  bg-self-care bg-right-top bg-no-repeat'>
            <div className=' flex flex-col absolute bottom-0 left-0 w-full hover:cursor-pointer rounded-lg hover:bg-custom-500  bg-custom-200  text-white p-5'>
              <div className=' flex flex-row justify-between'>
              <div className='  text-xs'>
                {data[5].title}
                </div>
                <div className='hover:cursor-pointer w-5'>
                  <Image
                  width={21}
                  height={5}
                  alt='setting'
                  className=' w-full'
                  src={"/images/icon-ellipsis.svg"}/>
                </div>
                
              </div>
              <div className=' flex flex-row md:justify-normal justify-between md:flex-col'>
                <div className=' mt-0 md:mt-5 text-3xl font-extralight'>
                {state === "Day" ? data[5].timeframes.daily.current :(state === "Week" ? data[5].timeframes.weekly.current : ( state === "Month"  ? data[5].timeframes.monthly.current : "" )) }
                hrs
                </div>
                <div className=' text-[0.6rem] items-center flex text-custom-400'>
                  Last {state} - 
                  {state === "Day" ? data[5].timeframes.daily.previous :(state === "Week" ? data[5].timeframes.weekly.previous : ( state === "Month"  ? data[5].timeframes.monthly.previous : "" )) }
               
                  hrs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}