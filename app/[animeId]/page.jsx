import Image from 'next/image';
import Link from 'next/link';

export default async function AnimeDetail({ params }) {
   const { animeId } = params;
   const data = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
   const animeData = await data.json();

   return (
      <div className="">
         <h1>Anime Details</h1>
         <div className="flex flex-col gap-4 md:flex-row md:font-md ">
            <div className="py-4">
               <Link
                  href={
                     animeData.data.trailer.url
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
                  />
               </Link>
            </div>
            <div className="py-2 w-1/2">
               <h1 className="text-xl font-bold border-b-2">
                  {animeData.data.title}
               </h1>
               <p>{animeData.data.duration}</p>
               <p>{animeData.data.type}</p>
               <p>
                  <span className="font-medium bg-[#011627] p-1 text-white rounded">
                     Rating:
                  </span>
                  <span className="font-bold px-2">{animeData.data.score}</span>
               </p>
               <p>{animeData.data.aired.string}</p>
               <p className="pb-2 pt-2">
                  <span className="bg-green-400 inline-block p-1 rounded text-white">
                     {animeData.data.status}
                  </span>
               </p>
               <h1 className="text-lg font-bold py-2 border-y-2">Synopsis</h1>
               <p className="">{animeData.data.synopsis}</p>
            </div>
         </div>
      </div>
   );
}
