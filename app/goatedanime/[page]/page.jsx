import ViewMore from '@/components/ViewMore';
import TopAnime from '@/components/TopAnime';

export default async function GoatedAnime({ params }) {
   const { page } = params;

   const data = await fetch(
      `https://api.jikan.moe/v4/anime?&order_by=members&sort=desc&page=${page}`
   );
   const response = await data.json();

   return (
      <div className="text-center py-10">
         <h1 className="py-10">Goated Anime List</h1>
         <div className="grid gap-10 grid-cols-fluid">
            {response?.data.map((anime) => {
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
