import React from 'react';

export default function AnimeInfoNav() {
   return (
      <nav className="pb-2">
         {/* Anime details nav main conntainer */}
         <div className=" mx-auto">
            {/* wrapper for all anime details links */}
            <div className="">
               <div className="flex flex-row-reverse items-center space-x-6 space-x-reverse">
                  <a href="#">Characters</a>
                  <a href="#">Episodes</a>
                  <a href="#">Reviews</a>
                  <a href="#">News</a>
               </div>
            </div>
         </div>
      </nav>
   );
}
