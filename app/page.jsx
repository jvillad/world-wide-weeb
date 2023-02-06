import './globals.css';
import TopAiring from '@/components/TopAiring';
import TopUpcoming from '@/components/TopUpcoming';
import PageWrapper from '../components/PageWrapper';
import ToWatch from '@/components/ToWatch';

export default function Home() {
   return (
      <>
         <>
            <ToWatch />
         </>
         <div className="mx-10">
            <PageWrapper>
               <TopAiring />
               <TopUpcoming />
            </PageWrapper>
         </div>
      </>
   );
}
