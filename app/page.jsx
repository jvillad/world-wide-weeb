import TopAnime from '@/component/TopAnime';

export default async function Home() {
   const data = await fetch(`https://api.jikan.moe/v4/top/anime`);
   const response = await data.json();
   return (
      <main>
         <div className="grid gap-10 grid-cols-fluid">
            {response.data.map((anime) => {
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
      </main>
   );
}
