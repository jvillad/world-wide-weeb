import './globals.css';
import SearchAnime from '@/components/SearchAnime';
import TopAiring from '@/components/TopAiring';

export default function Home() {
   return (
      <div>
         <SearchAnime />
         <TopAiring />
      </div>
   );
}
