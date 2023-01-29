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
      <form onSubmit={handleSearch} className="items-center flex">
         <div className="relative">
            <input
               className="block p-3 xl:w-[270px] text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
               id="anime-search"
               placeholder="Search anime here"
               value={search}
               onChange={(e) => {
                  setSearch(e.target.value);
               }}
               required
            />
            <button
               className="text-gray-400 absolute right-[2px] bottom-1.5 font-medium rounded-lg text-xl px-2 py-2"
               type="submit"
            >
               <AiOutlineSearch />
            </button>
         </div>
      </form>
   );
}
