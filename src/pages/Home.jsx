import React, { useState } from 'react';
import { Inputs } from '../components/InputField';
function Home() {
const [trackProgess,settrackProgess] = useState([]);
const [user , setUser ] = useState({});
let [i , setI ] = useState(0);
let [j , setJ ] = useState(1);
const handleChange = (e)=>{
const {name,value} = e.target;
  setUser({...user, [name]:value});
}
const handleSubmit = (e)=>{
e.preventDefault();
let itrack = i+1;
  settrackProgess([...trackProgess,itrack]);
  setI(itrack);
  setJ(j+1);
}
let processedStyle = {
backgroundColor: '#6dd4b1',
ringColor: '#6dd4b1',
}
let unprocessedStyle = {
backgroundColor: 'white',
ringColor: 'white',
}
  return (
  <div className='w-full h-full flex justify-center items-center py-24'>
    <div className='bg-[#010449] w-[80%] h-auto flex flex-wrap justify-center items-center gap-12 rounded-2xl p-12'>
     <div className='w-full text-white text-start px-2 lg:px-12'>
      <h1 className='font-bold leading-[33px] tracking-wider text-[20px]'>MY SKILL LEVEL</h1>
      <p className='font-sm tracking-normal'>Answer the following questions to begin your plan</p>
     </div>
     <hr className='h-[.2px] w-full bg-gray-700 border-0'/>
      <ul
        aria-label="Activity feed"
        role="feed"
        className="w-[95%] lg:w-[33%] relative flex flex-col gap-12 py-6 pl-4 before:absolute before:top-0 before:right-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:right-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 text-white"
      >
        <li role="article" className="relative pr-8" >
          <span className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/3 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white" style={processedStyle }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5" role="presentation">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
      </svg>
          </span>
          <div className="flex flex-col flex-1 gap-0 justify-center items-end mr-12">
            <h4 className="text-base font-medium text-white">
              {" "}
              Your name{" "}
            </h4>
            <p className="text-sm text-slate-500 text-white">First, Middle & Last name</p>
          </div>
        </li>
        <li role="article" className="relative pr-8 ">
          <span className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/3 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white " style={trackProgess.includes(1) === true?processedStyle: unprocessedStyle }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
              role="presentation"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </span>
          <div className="flex flex-col flex-1 gap-0 justify-center items-end mr-12">
            <h4 className="text-base font-medium text-white">
              {" "}
              City
            </h4>
            <p className="text-sm text-white">Location</p>
          </div>
        </li>
        <li role="article" className="relative pr-8 ">
          <span className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/3 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white " style={trackProgess.includes(2) === true?processedStyle: unprocessedStyle }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
              role="presentation"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </span>
          <div className="flex flex-col flex-1 gap-0 justify-center items-end mr-12">
            <h4 className="text-base font-medium text-white">
              {" "}
              Telephone{" "}
            </h4>
            <p className="text-sm text-white">Number</p>
          </div>
        </li>
      <li role="article" className="relative pr-8 ">
          <span className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/3 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white " style={trackProgess.includes(3) === true?processedStyle: unprocessedStyle }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
              role="presentation"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </span>
          <div className="flex flex-col flex-1 gap-0 justify-center items-end mr-12">
            <h4 className="text-base font-medium text-white">
              {" "}
              House{" "}
            </h4>
            <p className="text-sm text-white">Address</p>
          </div>
        </li>
        <li role="article" className="relative pr-8 ">
          <span className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/3 rounded-full bg-slate-200 text-slate-700 ring-2" style={trackProgess.includes(4) === true?processedStyle: unprocessedStyle }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
              role="presentation"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </span>
          <div className="flex flex-col flex-1 gap-0 justify-center items-end mr-12">
            <h4 className="text-base font-medium text-white">
              {" "}
              Country Of{" "}
            </h4>
            <p className="text-sm text-white">Residence</p>
          </div>
        </li>
      </ul>
     <div className="w-[90%] lg:w-[58%] mb-10 h-auto">
     <div className='flex flex-col gap-2 tracking-normal text-white'>
     <p className='font-[2px]'>step {j}/5</p>
     <h1 className='font-bold text-2xl tracking-wider'>Let's start with your name</h1>
     <p className=''>Fill in the details below.</p>
     </div>
     <hr className='h-[.2px] w-full bg-gray-700 border-0 my-8'/>
        <div className="relative my-6 flex flex-col justify-center items-start gap-6 ">
         {
           <>
              <input id={Inputs[i]?.id} type={Inputs[i]?.type} name={Inputs[i]?.name} className="peer relative h-10 w-full bg-transparent rounded-lg border border-slate-200 px-4 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-transparent" onChange={handleChange}/>
             <label htmlFor="id-01" className="absolute left-2 -top-8 my-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
               >
               {Inputs[i]?.label}
             </label>
           </>
         }
          <div className='w-full flex justify-end items-center'>
          <button
                type="submit"
                className={`rounded-xl bg-[rgb(109,212,177)] px-8 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(109,212,177)]`}
                onClick={handleSubmit}
                disabled= {i === 5? true: false}
              >
                Next step
              </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home;