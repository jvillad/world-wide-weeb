'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { sliderSettings } from '@/lib/sliderSettings';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageCarousel({ data }) {
   const slider = useRef(null);
   const nextSlide = () => slider.current.slickNext();
   const prevSlide = () => slider.current.slickPrev();

   return (
      <div className="relative">
         <Slider {...sliderSettings} ref={slider} className="mx-10">
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

         <div className="absolute top-0 mt-[100px] flex justify-between w-full">
            <button onClick={prevSlide}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 stroke-2 text-gray-400"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  />
               </svg>
            </button>
            <button onClick={nextSlide}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 stroke-2 text-gray-400"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
               </svg>
            </button>
         </div>
      </div>
   );
}
