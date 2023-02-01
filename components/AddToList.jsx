'use client';
import { useState } from 'react';

export default function AddToList({ animeDetails }) {
   const [watch, setWatch] = useState(false);

   // get previous watch list and check if anime already added to watch list
   const watchList = JSON.parse(localStorage.getItem('toWatch'));
   const exist =
      watchList &&
      watchList.some((anime) => anime.animeId === animeDetails.data.mal_id);
   if (exist) {
      return (
         <p className=" bg-green-500 text-white p-1 rounded">In watchlist</p>
      );
   }

   const addToWatchlist = () => {
      setWatch(true);
      // get previous added to watch
      const toWatch = JSON.parse(localStorage.getItem('toWatch'));
      // get the details of current added to watch
      const toWatchDetails = [
         {
            animeId: animeDetails.data.mal_id,
            animeTitle: animeDetails.data.title,
            animeImg: animeDetails.data.images.jpg.image_url,
            toWatchStatus: true,
         },
      ];
      if (toWatch) {
         // merge the previous and the current
         const updatedToWatch = [...toWatch, ...toWatchDetails];
         localStorage.setItem('toWatch', JSON.stringify(updatedToWatch));
         return;
      }
      localStorage.setItem('toWatch', JSON.stringify(toWatchDetails));
   };

   return (
      <button
         onClick={addToWatchlist}
         className="bg-yellow-400 p-1 text-white shadow-sm rounded"
      >
         {!watch && (
            <span className="flex">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M12 4.5v15m7.5-7.5h-15"
                  />
               </svg>
               Add To Watchlist
            </span>
         )}
      </button>
   );
}
