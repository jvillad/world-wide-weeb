import ToWatchCarousel from '@/components/ToWatchCarousel';
export default async function ToWatch() {
   const data = await fetch(`https://kitsu.io/api/edge/trending/anime`);
   const animeToWatch = await data.json();

   return (
      <div className="max-w-8xl">
         <ToWatchCarousel animes={animeToWatch} />
      </div>
   );
}
