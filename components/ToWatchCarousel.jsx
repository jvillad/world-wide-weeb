'use client';
import { useState, useEffect } from 'react';
export default function ToWatchCarousel({ animes }) {
   // set initial anime
   const [selectedImg, setSelectedImg] = useState(animes.data[0]);
   const [fullDescription, setFullDescription] = useState(false);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setSelectedImg(
            animes.data[Math.floor(Math.random() * animes.data.length)]
         );
      }, 7000);
      return () => clearInterval(intervalId);
   }, [animes]);

   const synopsis = selectedImg.attributes.description;
   const limitedDescription = synopsis.slice(
      0,
      synopsis.slice(0, 150).lastIndexOf(' ')
   );

   return (
      <>
         <div
            className="h-[70vh] bg-cover object-cover bg-center"
            style={{
               backgroundImage:
                  selectedImg &&
                  ` linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url(${selectedImg.attributes.coverImage.original})`,
            }}
         >
            <div className="w-full h-[600px] flex items-center">
               <div className="mx-10">
                  <p className="text-gray-100 text-[42px] font-semibold">
                     {selectedImg.attributes.canonicalTitle}
                  </p>
                  <p className="text-white p-2 flex gap-10 items-center">
                     <span className="border-2 py-1 px-2 rounded">
                        {selectedImg.attributes.showType}
                     </span>
                     <span className="border-2 py-1 px-2 rounded">
                        {' '}
                        {selectedImg.attributes.ageRating
                           ? selectedImg.attributes.ageRating
                           : 'NA'}
                     </span>
                  </p>
                  <p className="text-sm text-gray-200 p-2 w-2/3">
                     {fullDescription ? synopsis : limitedDescription}{' '}
                     {!fullDescription ? (
                        <button
                           onClick={() => {
                              setFullDescription(true);
                           }}
                        >
                           ... Display more
                        </button>
                     ) : (
                        <button
                           onClick={() => {
                              setFullDescription(false);
                           }}
                           className="hover:bg-gray-400 p-1 rounded"
                        >
                           Display less
                        </button>
                     )}
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

{
   /* TODO: decide for buttons, since I already have interval */
}
{
   /* <button className="hidden absolute left-0 inset-y-0 ml-5">
               Prev
            </button> */
}
{
   /* <button className="hidden absolute right-0 inset-y-0 mr-5">
               Next
            </button> */
}
