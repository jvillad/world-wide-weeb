import AnimeInfoNav from './AnimeInfoNav';
export default function Layout({ children }) {
   return (
      <>
         <AnimeInfoNav />
         {children}
      </>
   );
}
