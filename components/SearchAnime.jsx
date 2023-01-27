'use client';
import '../app/globals.css';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

export default function SearchAnime() {
   const [search, setSearch] = useState('');
   const router = useRouter();

   const handleSearch = async (e) => {
      e.preventDefault();
      setSearch('');

      // route user to search result page
      router.push(`/search/${search}`);
   };

   return (
      <div className="mx-24 mt-4 mb-12">
         <div className="w-5/6">
            <form onSubmit={handleSearch}>
               <label htmlFor="anime-searh" className="block p-1">
                  Search Anime
               </label>

               <div className="relative">
                  <input
                     className="block p-4 pl-10 w-1/2 text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                     id="anime-search"
                     placeholder="Search here"
                     value={search}
                     onChange={(e) => {
                        setSearch(e.target.value);
                     }}
                  />
                  <button
                     className="text-gray-400 absolute right-[51%] bottom-2.5 font-medium rounded-lg text-xl px-4 py-2"
                     type="submit"
                  >
                     <AiOutlineSearch />
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
