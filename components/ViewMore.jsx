'use client';

import { useRouter } from 'next/navigation';

export default function ViewMore({ currentPage }) {
   const router = useRouter();
   return (
      <>
         <button
            onClick={() => {
               const nextPage = currentPage + 1;
               router.push(`/goatedanime/${nextPage}`);
            }}
            className="text-gray-500 hover:text-gray-800"
         >
            Browse More...
         </button>
      </>
   );
}
