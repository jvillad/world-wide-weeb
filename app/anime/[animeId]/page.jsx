import AddToList from '@/components/AddToList';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function AnimeDetail({ params }) {
   const user = await getServerSession(authOptions);
   if (user === null) return redirect('/login');
   const { animeId } = params;
   let animeData = null;

   try {
      const data = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
      if (!data.ok) {
         throw new Error('Failed to fetch anime data');
      }

      animeData = await data.json();
   } catch (error) {
      console.error('An error occurred while fetching anime data:', error);
   }

   return (
      <div className="max-w-[1200px] mx-auto">
         <div className="flex flex-col items-center text-center xl:flex xl:flex-row xl:justify-between xl:text-left mb-[10px] mt-10">
            <div>
               <h1 className="text-[40px] font-bold text-gray-700 px-1">
                  {animeData?.data.title}
               </h1>
               <p className="text-sm px-2 pb-2 text-gray-400">
                  {animeData?.data.aired.string}{' '}
                  <span className="font-bold">&#183;</span>{' '}
                  {animeData?.data.duration}{' '}
                  <span className="font-bold">&#183;</span>{' '}
                  <span className="bg-green-500 p-1 rounded text-white">
                     {animeData?.data.status}
                  </span>
               </p>
            </div>
            <div className="flex items-center pr-4">
               <div className="block text-right">
                  <h1 className="font-semibold text-lg">Rating</h1>
                  <div className="flex text-xl">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-yellow-400 w-6 h-6 stroke-2"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                     </svg>
                     <p>
                        <span className="font-bold">
                           {animeData?.data.score}
                        </span>
                        /10
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-col lg:flex lg:flex-row lg:space-x-2 relative">
            <div className="flex justify-center">
               <div>
                  <a
                     href={
                        animeData?.data?.trailer.url
                           ? animeData?.data.trailer.url
                           : '#'
                     }
                  >
                     <Image
                        src={animeData?.data.images.jpg.large_image_url}
                        alt={animeData?.data.title}
                        width={425}
                        height={450}
                        priority
                        className="rounded h-full"
                     />
                  </a>
                  <div className="absolute top-0">
                     <AddToList animeDetails={animeData} />
                  </div>
               </div>
            </div>
            <div className="w-full">
               <iframe
                  src={`${animeData?.data?.trailer.embed_url}&mute=1`}
                  className="w-full h-full rounded  md:min-h-[450px] "
               />
            </div>
         </div>

         <div>
            <div>
               <h1 className="text-lg font-bold py-2">Synopsis</h1>
               <p className="pt-2">{animeData?.data.synopsis}</p>
            </div>
         </div>
      </div>
   );
}
