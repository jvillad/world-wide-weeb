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
      return <>In watchlist</>;
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
      <button onClick={addToWatchlist}>{!watch && '+ Add To Watchlist'}</button>
   );
}
