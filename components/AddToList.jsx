'use client';
import { useState } from 'react';
export default function AddToList({ animeDetails }) {
   const [watch, setWatch] = useState(false);
   const addToWatchlist = () => {
      setWatch(true);
      // get previous added to watch
      const toWatch = JSON.parse(localStorage.getItem('toWatch'));
      // get the details of current added to watch
      const toWatchDetails = [
         {
            title: animeDetails.data.title,
            toWatchImg: animeDetails.data.images.jpg.image_url,
            toWatch: true,
         },
      ];
      if (toWatch) {
         // merge the previous and the current
         const updatedToWatch = [...toWatchDetails, ...toWatch];
         console.log(updatedToWatch);
         localStorage.setItem('toWatch', JSON.stringify(updatedToWatch));
         return;
      }
      localStorage.setItem('toWatch', JSON.stringify(toWatchDetails));
   };

   return (
      <button onClick={addToWatchlist}>
         {watch ? 'Added to watchlist' : '+ Add To Watchlist'}
      </button>
   );
}
