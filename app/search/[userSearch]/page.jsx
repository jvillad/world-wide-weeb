import SearchAnime from '@/components/SearchAnime';
import DisplaySearch from '../DisplaySearch';

export default async function SearchResult({ params }) {
   const { userSearch } = params;
   const data = await fetch(`https://api.jikan.moe/v4/anime?q=${userSearch}`);
   const animeData = await data.json();
   return (
      <>
         <SearchAnime />
         <div className="grid gap-10 grid-cols-fluid">
            {animeData?.data.map((anime) => {
               return (
                  <DisplaySearch
                     key={anime.mal_id}
                     id={anime.mal_id}
                     imgUrl={anime.images.jpg}
                     animeTitle={anime.title}
                  />
               );
            })}
         </div>
      </>
   );
}
