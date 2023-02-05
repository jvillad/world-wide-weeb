import ViewMore from '@/components/ViewMore';
import TopAnime from '@/components/TopAnime';

export default async function GoatedAnime({ params }) {
   const { page } = params;

   const data = await fetch(
      `https://api.jikan.moe/v4/anime?&order_by=members&sort=desc&page=${page}`
   );
   const response = await data.json();

   return (
      <div className="mx-10 text-center py-20">
         <h1 className="py-10 text-[30px] text-gray-600 font-bold">
            GOATED Animes
         </h1>
         <div className="grid gap-10 grid-cols-fluid">
            {response &&
               response?.data.map((anime) => {
                  return (
                     <TopAnime
                        key={anime.mal_id}
                        id={anime.mal_id}
                        url={anime.url}
                        title={anime.title}
                        score={anime.score}
                        img={anime.images.jpg}
                     />
                  );
               })}
         </div>
         <ViewMore currentPage={response?.pagination.current_page} />
      </div>
   );
}
