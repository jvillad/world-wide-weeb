import Link from 'next/link';
import Image from 'next/image';

export default function TopAnime({ title, id, score, img }) {
   return (
      <div>
         <h1>{title}</h1>
         <h2>{score}</h2>
         <Link href={`${id}`}>
            <Image
               src={img.image_url}
               alt={title}
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
