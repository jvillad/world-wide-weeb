'use client';
import { useState } from 'react';

export default function AnimeInfoNav() {
   const [open, setOpen] = useState(false);
   return (
      <nav className="flex justify-center items-center relative mt-40">
         <div className="rounded-md w-full bg-gray-800 xs:min-w-[250px] ">
            <div className="flex flex-row-reverse p-2 md:hidden">
               <button
                  onClick={() => {
                     setOpen(!open);
                  }}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6 text-teal-500"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                     />
                  </svg>
               </button>
            </div>
            {/* Anime details nav main container */}
            <div className="mx-auto">
               {/* wrapper for all anime details links */}
               <div
                  className={`w-full md:block md:w-auto ${!open && 'hidden'}`}
               >
                  <div className="flex flex-col-reverse md:flex md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse text-teal-500 p-2 mr-3">
                     <a href="#">Characters</a>
                     <a href="#">Episodes</a>
                     <a href="#">Reviews</a>
                     <a href="#">News</a>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
}
