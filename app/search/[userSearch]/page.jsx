import DisplaySearch from '../DisplaySearch';
import PageWrapper from '../../../components/PageWrapper';
export default async function SearchResult({ params }) {
   const { userSearch } = params;
   const data = await fetch(`https://api.jikan.moe/v4/anime?q=${userSearch}`);
   const animeData = await data.json();
   return (
      <div className="my-36 mx-10 ">
         <PageWrapper>
            <div className="grid grid-cols-fluid gap-10">
               {animeData.data.map((anime) => {
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
         </PageWrapper>
      </div>
   );
}
