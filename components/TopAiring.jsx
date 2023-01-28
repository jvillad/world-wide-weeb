import TopAiringCarousel from './TopAiringCarousel';

export default async function TopAiring() {
   const data = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing`);
   const topAiringAnime = await data.json();
   let animeDetails = [];
   return (
      <div>
         {topAiringAnime.data?.map((anime) => {
            animeDetails.push({
               id: anime.mal_id,
               url: anime.images.jpg.image_url,
               title: anime.title,
            });
         })}
         <TopAiringCarousel data={animeDetails} />
      </div>
   );
}
