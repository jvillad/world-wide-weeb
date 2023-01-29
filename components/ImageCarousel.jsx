'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { sliderSettings } from '@/lib/sliderSettings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageCarousel({ data }) {
   return (
      <>
         <Slider {...sliderSettings}>
            {data?.map((image) => {
               return (
                  <div key={image.id}>
                     <div className="w-[170px]">
                        <Link href={`${image.id}`}>
                           <Image
                              src={image.url}
                              alt={`an image of ${image.title}`}
                              width={170}
                              height={240}
                              style={{
                                 width: 170,
                                 height: 240,
                              }}
                              className="rounded-xl"
                           />
                        </Link>
                        <div className="text-xs w-[170px]">{image.title}</div>
                     </div>
                  </div>
               );
            })}
         </Slider>
      </>
   );
}
