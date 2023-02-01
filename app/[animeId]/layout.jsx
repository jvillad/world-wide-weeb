import AnimeInfoNav from './AnimeInfoNav';
export default function Layout({ children }) {
   return (
      <div className="mx-20">
         <AnimeInfoNav />
         {children}
      </div>
   );
}
