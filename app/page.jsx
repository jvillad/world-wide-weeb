import './globals.css';
import TopAiring from '@/components/TopAiring';
import TopUpcoming from '@/components/TopUpcoming';
import PageWrapper from '../components/PageWrapper';

export default function Home() {
   return (
      <>
         <PageWrapper>
            <TopAiring />
            <TopUpcoming />
         </PageWrapper>
      </>
   );
}
