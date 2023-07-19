import AnimeInfoNav from './AnimeInfoNav';
export default function Layout({ children }) {
   return (
      <div className="mx-10">
         <AnimeInfoNav />
         {children}
      </div>
   );
}
