import Link from 'next/link';

function Nav() {
   return (
      <nav>
         <ul className="flex justify-evenly mt-10 p-4">
            <li>
               <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/ranking">Top Anime</Link>
            </li>
            <li>Trending</li>
            <li>Manga</li>
         </ul>
      </nav>
   );
}

export default Nav;
