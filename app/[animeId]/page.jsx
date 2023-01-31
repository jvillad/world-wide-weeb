import AddToList from '@/components/AddToList';
import Image from 'next/image';
import Link from 'next/link';
// TODO: Improve layout
export default async function AnimeDetail({ params }) {
   const { animeId } = params;
   const data = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
   const animeData = await data.json();

   return (
      <>
         <h1 className="text-xl font-bold p-1">{animeData.data.title}</h1>
         <p className="text-sm px-1 pb-1">
            {animeData.data.aired.string}{' '}
            <span className="font-bold">&#183;</span> {animeData.data.duration}
         </p>

         <div className="border-2 rounded-lg">
            <div className="flex flex-col gap-4 md:flex-row md:font-md">
               <div>
                  <Link
                     href={
                        animeData.data?.trailer.url
                           ? animeData.data.trailer.url
                           : '#'
                     }
                  >
                     <Image
                        src={animeData.data.images.jpg.large_image_url}
                        alt={animeData.data.title}
                        width={425}
                        height={600}
                        priority
                        style={{
                           width: 425,
                           height: 600,
                        }}
                        className="rounded"
                     />
                  </Link>
               </div>
               <div className="w-1/2">
                  <p>
                     <span className="font-medium bg-[#011627] p-1 text-white rounded">
                        Rating:
                     </span>
                     <span className="font-bold px-2">
                        {animeData.data.score}
                     </span>
                  </p>
                  <p className="pb-3 pt-2">
                     <span className="bg-green-400 inline-block p-1 rounded text-white">
                        {animeData.data.status}
                     </span>
                  </p>
                  <h1 className="text-lg font-bold py-2">Synopsis</h1>
                  <p className="pt-2">{animeData.data.synopsis}</p>
                  <AddToList animeDetails={animeData} />
               </div>
            </div>
         </div>
      </>
   );
}
