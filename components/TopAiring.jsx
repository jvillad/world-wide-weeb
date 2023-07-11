import ImageCarousel from './ImageCarousel';

export default async function TopAiring() {
   const data = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing`);
   const topAiringAnime = await data.json();
   let animeDetails = [];
   return (
      <div className="mt-6">
         {topAiringAnime.data?.map((anime) => {
            animeDetails.push({
               id: anime.mal_id,
               url: anime.images.jpg.image_url,
               title: anime.title,
            });
         })}
         <div className="max-w-[1200px] mx-auto">
            <h1 className="p-2 font-bold">Top Airing Anime</h1>
            <ImageCarousel data={animeDetails} />
         </div>
      </div>
   );
}
