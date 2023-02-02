'use client';

import { useState, useEffect } from 'react';
export default function ToWatchCarousel({ animes }) {
   const [selectedImg, setSelectedImg] = useState(animes.data[0]);
   useEffect(() => {
      setSelectedImg(
         animes.data[Math.floor(Math.random() * animes.data.length)]
      );
   }, [animes]);
   const clickNextBtn = () => {
      setSelectedImg(
         animes.data[Math.floor(Math.random() * animes.data.length)]
      );
   };
   return (
      <>
         <div
            className="h-[70vh] bg-cover object-cover bg-center"
            style={{
               backgroundImage:
                  selectedImg &&
                  ` linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url(${selectedImg.attributes.coverImage.original})`,
            }}
         >
            <button className="absolute left-0 inset-y-0 ml-5">Prev</button>
            <button
               className="absolute right-0 inset-y-0 mr-5"
               onClick={clickNextBtn}
            >
               Next
            </button>
         </div>
      </>
   );
}
