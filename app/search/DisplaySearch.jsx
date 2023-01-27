import Link from 'next/link';
import Image from 'next/image';
export default function DisplaySearch({ id, imgUrl, animeTitle }) {
   return (
      <div>
         <h1>{animeTitle}</h1>
         <Link href={`${id}`}>
            <Image
               src={imgUrl.image_url}
               alt={animeTitle}
               width={225}
               height={330}
               style={{
                  width: 225,
                  height: 330,
               }}
            />
         </Link>
      </div>
   );
}
