import Link from 'next/link';
import Image from 'next/image';

export default function TopAnime({ title, id, img }) {
   return (
      <div className="grid place-items-center p-2 rounded-xl bg-gray-900">
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
               className="rounded-xl"
            />
            <div className="w-[230px]">
               <h1 className="text-sm p-2 text-white">{title}</h1>
            </div>
         </Link>
      </div>
   );
}
