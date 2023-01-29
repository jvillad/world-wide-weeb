import './globals.css';
import TopAiring from '@/components/TopAiring';
import TopUpcoming from '@/components/TopUpcoming';

export default function Home() {
   return (
      <div>
         <TopAiring />
         <TopUpcoming />
      </div>
   );
}
