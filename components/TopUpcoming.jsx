import ImageCarousel from './ImageCarousel';

export default async function TopUpcoming() {
   const data = await fetch(
      `https://api.jikan.moe/v4/top/anime?filter=upcoming`
   );
   const topUpcomingAnime = await data.json();
   let animeDetails = [];
   return (
      <div className="mt-10">
         <h1 className="p-2 font-bold">Top Upcoming</h1>
         {topUpcomingAnime.data?.map((anime) => {
            animeDetails.push({
               id: anime.mal_id,
               url: anime.images.jpg.image_url,
               title: anime.title,
            });
         })}
         <ImageCarousel data={animeDetails} />
      </div>
   );
}
