"use client";
import React from "react";
import Image from "next/image";
// import { FaSquare,FaSlidersH,FaArrowDown } from "react-icons/fa";
import { projectData } from "../../components/projectCard/Card";
import {
    Sheet,
    SheetContent,
    
    SheetTrigger,
  } from "../../components/ui/sheet";

  
const page = () => {
 
  return (
    <div>
      <div className='w-full  md:h-[233vh]  flex  items-center flex-col'>
      <div className='flex justify-between  items-center w-[90%] md:h-[62px] text-black '>
    <div>
        <h1 className='md:text-[22px] text-[18px]'>New (500)</h1>
    </div>
    <div className='flex justify-center items-center gap-2 '>
        <div className='flex gap-5'>
            <div className="flex justify-center gap-5 items-center">
                <div>
                    <h1 className="text-[15px] font-thin">Hide Filters</h1>
                </div>
                <div>
                    
                    <div>
                       <Sheet >
            <SheetTrigger className="md:hidden">
              
            </SheetTrigger>
            <SheetContent>
            <div className="flex flex-col justify-start ">
   

        <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
            <div className="flex flex-row pt-1 text-black gap-[100px] justify-center  items-center ">
                <h1 className="text-[16px] font-medium">Gender</h1>
                <Image
                src="/up.svg"
                alt="up"
                height={14}
                width={14}
                />
            </div>
            <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal">Men</h1> 
                </div>
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal">Women</h1> 
                </div>
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal">Unisex</h1> 
                </div>
            </div>
        </div>


      <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
            <div className="flex flex-row pt-1 text-black gap-[122px] justify-center  items-center ">
                <h1 className="text-[16px] font-medium">Kids</h1>
                <Image
                src="/up.svg"
                alt="up"
                height={14}
                width={14}
                />
            </div>
            <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal">Boys</h1> 
                </div>
                <div className="flex justify-center items-center gap-2">
            
                    <h1 className="font-normal">Girls</h1> 
                </div>
            </div>
        </div>

        <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
            <div className="flex flex-row pt-1 text-black gap-[50px] justify-center  items-center ">
                <h1 className="text-[16px] font-medium">Shop By Price</h1>
                <Image
                src="/up.svg"
                alt="up"
                height={14}
                width={14}
                />
            </div>
            <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                <div className="flex justify-center items-center gap-2">
            
               <h1 className=" font-normal">Under PKR 2 500.00</h1> 
                </div>
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal ">Above 7 500.00</h1> 
                </div>
            </div>
        </div>


    </div>
            </SheetContent>
          </Sheet> 
                </div>
                </div>
            </div>
            <div className="flex justify-center gap-5 items-center">
                <div>
                    <h1 className="text-[15px] font-thin">Sort By</h1>
                </div>

                <div>
                    
                       <Sheet >
            <SheetTrigger className="md:hidden">

            </SheetTrigger>
            <SheetContent>
            <div className="flex flex-col justify-start ">
        <div className="flex mt-8 flex-col gap-2 text-[15px] justify-start">
        <p>Shoes</p>
        <p>Sport Bras</p>
        <p>Tops & T-Shirts</p>
        <p>Hoodies & Sweatshirts</p>
        <p>Jackets</p>
        <p>Trousers & Tights</p>
        <p>Shorts</p>
        <p>Tracksuits</p>
        <p>Jumpsuits & Rompers</p>
        <p>Skirts & Dresses</p>
        <p>Socks</p>
        <p>Accessories & Equipment</p>
        </div>

      


    </div>
            </SheetContent>
          </Sheet> 
                </div>
                
            </div>
        </div>

    </div>

 </div>
 <div className="w-[90%] flex justify-between  ">

    <div className="w-[15%] hidden md:flex flex-col justify-start ">
        <div className="flex flex-col gap-2 text-[15px] justify-start">
        <p>Shoes</p>
        <p>Sport Bras</p>
        <p>Tops & T-Shirts</p>
        <p>Hoodies & Sweatshirts</p>
        <p>Jackets</p>
        <p>Trousers & Tights</p>
        <p>Shorts</p>
        <p>Tracksuits</p>
        <p>Jumpsuits & Rompers</p>
        <p>Skirts & Dresses</p>
        <p>Socks</p>
        <p>Accessories & Equipment</p>
        </div>

        <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
            <div className="flex flex-row pt-1 text-black gap-[100px] justify-center  items-center ">
                <h1 className="text-[16px] font-medium">Gender</h1>
                <Image
                src="/up.svg"
                alt="up"
                height={14}
                width={14}
                />
            </div>
            <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal">Men</h1> 
                </div>
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal">Women</h1> 
                </div>
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal">Unisex</h1> 
                </div>
            </div>
        </div>


      <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
            <div className="flex flex-row pt-1 text-black gap-[122px] justify-center  items-center ">
                <h1 className="text-[16px] font-medium">Kids</h1>
                <Image
                src="/up.svg"
                alt="up"
                height={14}
                width={14}
                />
            </div>
            <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal">Boys</h1> 
                </div>
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal">Girls</h1> 
                </div>
            </div>
        </div>

        <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
            <div className="flex flex-row pt-1 text-black gap-[50px] justify-center  items-center ">
                <h1 className="text-[16px] font-medium">Shop By Price</h1>
                <Image
                src="/up.svg"
                alt="up"
                height={14}
                width={14}
                />
            </div>
            <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                <div className="flex justify-center items-center gap-2">
            
               <h1 className=" font-normal">Under PKR 2 500.00</h1> 
                </div>
                <div className="flex justify-center items-center gap-2">
            
               <h1 className="font-normal ">Above 7 500.00</h1> 
                </div>
            </div>
        </div>


    </div>


    <div className="md:w-[75%] w-full justify-center items-center  flex-col grid grid-cols-1 mt-5 md:grid-cols-3 gap-3 ">
    {projectData.slice(7,16).map((item) => {
    return (
      <div
        key={item.id}
        className="pb-4 m-1 shadow-lg rounded-lg md:transition-all duration-300 md:hover:scale-105">
        <Image
          src={item.image}
          alt={item.title}
          width={441}
          height={341}
          className="w-full  cursor-pointer "
        />
        <div className="px-1 pt-1 ">
            <p className="text-[#9E3500]">{item.check}</p>
          <h1 className=" text-black font-medium text-[15px]">{item.title}</h1>
          <p className="text-[12px] text-[#757575] font-thing pt-1">
            {item.description}
          </p>
          <p className="text-[#757575]">{item.color}</p>
           <p>{item.price}</p>
        </div>
    
      </div>
    );
  })}
    </div>
 </div>
      </div>
    </div>
  );
};

export default page;