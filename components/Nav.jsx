'use client';
import Link from 'next/link';
import { useState } from 'react';
import SearchAnime from './SearchAnime';
import { useSession, signOut } from 'next-auth/react';

function Nav() {
   const [nav, setNav] = useState(false);
   const { data: session } = useSession();
   const [showDropdown, setShowDropdown] = useState(false);

   return (
      <nav className="py-5 w-full absolute top-0">
         <div className="bg-gradient-to-r from-gray-900 via-purple-600 to-pink-700 opacity-85">
            <div className="flex justify-between max-w-[1400px] mx-auto">
               <div className="flex space-x-1">
                  <div>
                     <Link
                        href="/"
                        className="flex items-center p-5 min-h-[80px]"
                     >
                        <svg
                           className="h-7 w-7"
                           xmlns="http://www.w3.org/2000/svg"
                           x="0px"
                           y="0px"
                           width="100"
                           height="100"
                           viewBox="0 0 50 50"
                        >
                           <path
                              fill="#e6f0ef"
                              d="M 27.066406 3.765625 C 21.164431 3.765625 15.713066 6.2536381 11.410156 10.865234 C 8.651952 13.821198 6.9277746 17.487833 6.4199219 21.457031 L 0.13476562 38.982422 C -0.1934761 39.8997 -0.055246455 40.922997 0.50585938 41.720703 C 1.0670703 42.519003 1.9833556 42.994141 2.9589844 42.994141 L 24.695312 42.994141 L 25.673828 42.994141 L 25.830078 43.001953 L 25.882812 42.998047 C 30.24608 42.71538 34.215922 40.75966 37.115234 37.652344 C 42.33111 32.06052 42.197619 23.042296 36.835938 17.488281 C 34.074491 14.627832 30.471588 12.955078 26.886719 12.955078 L 26.824219 12.955078 L 26.820312 12.955078 C 23.59948 12.975848 20.611176 14.349259 18.273438 16.832031 C 14.488283 20.854457 14.572542 27.669858 18.445312 31.646484 C 20.198525 33.445656 22.633437 34.511719 25.064453 34.511719 C 27.010158 34.511719 28.820143 33.798314 30.197266 32.470703 L 30.197266 32.46875 C 31.597086 31.117619 32.249973 29.105553 32.029297 27.068359 C 31.811737 25.060561 30.773976 23.292528 29.140625 22.287109 L 29.140625 22.285156 L 29.138672 22.285156 C 28.666971 21.995568 28.123945 21.841797 27.568359 21.841797 C 26.529744 21.841797 25.557598 22.384211 25.013672 23.269531 C 24.596753 23.945536 24.464207 24.764529 24.648438 25.537109 C 24.832674 26.309717 25.320529 26.980752 25.996094 27.396484 C 25.84562 27.303804 26.037423 27.467954 26.064453 27.714844 C 26.097803 28.040542 25.902261 28.276391 26.033203 28.150391 C 25.780365 28.39395 25.52032 28.503906 25.078125 28.503906 C 24.252904 28.503906 23.205929 27.932141 22.744141 27.458984 C 21.205057 25.878557 21.1645 22.515241 22.642578 20.945312 C 23.894873 19.614749 25.319581 18.9654 26.847656 18.955078 C 28.750219 18.955682 30.829935 19.910653 32.517578 21.65625 C 35.609606 24.85947 35.694353 30.378891 32.728516 33.558594 C 30.701678 35.730271 27.7451 36.992188 24.623047 36.992188 C 21.854289 36.992188 19.19089 36.016448 17.125 34.248047 C 14.182319 31.730305 12.469326 28.323582 12.261719 24.621094 C 12.060785 21.040557 13.308133 17.626894 15.796875 14.958984 C 18.974427 11.553105 22.840746 9.8046875 27.085938 9.8046875 C 31.169697 9.8046875 35.421631 11.454941 39.386719 14.666016 L 39.388672 14.666016 C 39.923286 15.098225 40.587902 15.332031 41.275391 15.332031 C 41.919836 15.332031 42.55186 15.122688 43.068359 14.738281 L 48.835938 10.4375 C 50.153173 9.4529302 50.429255 7.5566753 49.445312 6.2382812 C 48.878383 5.4803697 47.987088 5.03125 47.039062 5.03125 C 46.394618 5.03125 45.763068 5.2407082 45.246094 5.6269531 L 41.248047 8.6113281 C 36.758685 5.4836359 31.889832 3.7666284 27.068359 3.765625 L 27.066406 3.765625 z M 27.066406 5.765625 L 27.068359 5.765625 C 31.631253 5.7665746 36.329328 7.4228756 40.703125 10.628906 L 41.300781 11.066406 L 46.441406 7.2304688 L 46.443359 7.2304688 C 46.622291 7.0967136 46.815508 7.03125 47.039062 7.03125 C 47.348438 7.03125 47.654625 7.1863156 47.841797 7.4355469 C 48.175489 7.8826643 48.086164 8.4983071 47.638672 8.8339844 L 41.873047 13.134766 C 41.693547 13.268359 41.498945 13.332031 41.275391 13.332031 C 41.048879 13.332031 40.82187 13.251161 40.646484 13.109375 L 40.646484 13.111328 C 36.397572 9.6703555 31.708176 7.8046875 27.085938 7.8046875 C 22.283127 7.8046875 17.836432 9.8396294 14.333984 13.59375 C 11.488727 16.64384 10.034559 20.616912 10.265625 24.734375 C 10.504018 28.985886 12.4929 32.91732 15.824219 35.767578 C 18.258329 37.851177 21.383805 38.992188 24.623047 38.992188 C 28.282994 38.992188 31.766291 37.520151 34.189453 34.923828 C 37.935616 30.907531 37.817003 24.264405 33.957031 20.265625 C 31.953418 18.192547 29.404209 16.955078 26.845703 16.955078 L 26.841797 16.955078 L 26.839844 16.955078 C 24.73338 16.967828 22.748197 17.913903 21.185547 19.574219 C 18.833625 22.072292 18.903631 26.383896 21.310547 28.855469 C 22.155219 29.722131 23.501882 30.503906 25.078125 30.503906 C 25.95193 30.503906 26.80076 30.186284 27.419922 29.589844 C 27.975448 29.055281 28.145156 28.350056 28.052734 27.498047 C 27.975764 26.794937 27.747396 26.126043 27.044922 25.693359 C 26.810486 25.549091 26.657513 25.339658 26.59375 25.072266 C 26.52998 24.804846 26.57176 24.550355 26.714844 24.318359 L 26.716797 24.318359 L 26.716797 24.316406 C 26.905158 24.009162 27.205923 23.841797 27.568359 23.841797 C 27.752139 23.841797 27.931914 23.892487 28.091797 23.990234 C 29.158446 24.646816 29.882575 25.821001 30.041016 27.283203 C 30.200271 28.753378 29.708036 30.160339 28.808594 31.029297 C 27.793717 32.007686 26.534748 32.511719 25.064453 32.511719 C 23.233469 32.511719 21.253695 31.660829 19.878906 30.25 C 16.815678 27.104626 16.751623 21.368699 19.730469 18.203125 C 21.744731 16.063897 24.162818 14.972306 26.833984 14.955078 L 26.886719 14.955078 C 29.843849 14.955078 32.96993 16.363402 35.396484 18.876953 C 40.014803 23.660939 40.120468 31.496933 35.652344 36.287109 C 33.094819 39.028116 29.621117 40.739289 25.785156 40.996094 L 25.714844 40.994141 L 24.695312 40.994141 L 2.9589844 40.994141 C 2.6326132 40.994141 2.327414 40.836013 2.140625 40.570312 C 1.9546314 40.306335 1.9080295 39.962386 2.0175781 39.65625 L 8.3710938 21.945312 L 8.3847656 21.833984 C 8.8196528 18.228203 10.363187 14.918327 12.873047 12.228516 C 16.850137 7.9661119 21.720382 5.765625 27.066406 5.765625 z M 8.4570312 27.615234 L 4.3789062 38.994141 L 5.8007812 38.994141 L 16.505859 38.994141 L 14.46875 37.238281 C 12.170192 35.255324 10.464917 32.838006 9.4238281 30.128906 L 8.4570312 27.615234 z M 8.6757812 32.935547 C 9.4563958 34.400319 10.416614 35.749154 11.560547 36.994141 L 7.2207031 36.994141 L 8.6757812 32.935547 z"
                           ></path>
                        </svg>
                        <span className="mr-10 text-teal-400">AnimeDB</span>
                     </Link>
                  </div>
                  <div className="hidden md:flex">
                     <SearchAnime />
                  </div>

                  {/* main links - primary nav */}
                  <div className="hidden lg:flex items-center space-x-10">
                     <Link
                        href="/"
                        className="p-5 text-sm text-white font-semibold ml-10  hover:text-gray-900"
                     >
                        Home
                     </Link>
                     <Link
                        href={`/goatedanime/${1}`}
                        className="p-5 text-sm text-white font-semibold hover:text-gray-900"
                     >
                        GOATED Animes
                     </Link>
                     <a
                        href="#"
                        className="p-5 text-sm text-gray-800 font-semibold hover:text-gray-900"
                     >
                        Manga(soon)
                     </a>
                  </div>
               </div>

               {/* third child element for auths - secondary nav*/}
               <div className="hidden items-center lg:flex mr-5">
                  {session ? (
                     <div className="flex items-center">
                        <Link
                           href="/"
                           className="p-5 text-white font-semibold hover:text-gray-900 mr-5 flex items-center gap-2"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-bookmark-plus"
                              viewBox="0 0 16 16"
                           >
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                              <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                           </svg>
                           Watchlist
                        </Link>

                        <div className="relative">
                           <button
                              onClick={() => setShowDropdown(!showDropdown)}
                              className=" text-white font-semibold hover:text-gray-900 flex items-center gap-2"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 fill="currentColor"
                                 className="bi bi-person-circle"
                                 viewBox="0 0 16 16"
                              >
                                 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                 <path
                                    fillRule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                 />
                              </svg>
                              {session.user.name}
                           </button>
                           {/* Dropdown Menu */}
                           {showDropdown && (
                              <div className="absolute  mt-2  bg-white rounded shadow-lg">
                                 <button
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-32"
                                    onClick={async () => await signOut()}
                                 >
                                    Sign Out
                                 </button>
                              </div>
                           )}
                        </div>
                     </div>
                  ) : (
                     <div>
                        <Link
                           href="/login"
                           className="p-5 text-white font-semibold hover:text-gray-900 mr-5"
                        >
                           Login
                        </Link>
                        <Link
                           href="/register"
                           className="py-2 px-4 bg-[#ff9f1c] text-[#011627] rounded-lg text-sm font-semibold"
                        >
                           Signup
                        </Link>
                     </div>
                  )}
               </div>

               {/* mobile nav */}
               <div className="lg:hidden flex items-center">
                  {!nav ? (
                     <button
                        onClick={() => {
                           setNav(true);
                        }}
                     >
                        <svg
                           className="w-7 h-7 stroke-2 mr-5 text-white"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                           />
                        </svg>
                     </button>
                  ) : (
                     <button
                        onClick={() => {
                           setNav(!nav);
                        }}
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-7 h-7 mr-5 stroke-2 text-white"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                           />
                        </svg>
                     </button>
                  )}
               </div>
            </div>
         </div>

         {/* mobile menu */}
         <div
            className={`lg:hidden relative rounded-b-lg text-center text-white ${
               !nav ? 'hidden' : ''
            }`}
         >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-600 to-pink-700 opacity-85 opacity-70 rounded-b-lg"></div>
            <div className="flex justify-center pt-4">
               <SearchAnime />
            </div>
            <a
               href={`/goatedanime/${1}`}
               className="block py-4 px-4 text-sm hover:bg-blue-600 hover:text-white rounded relative z-10"
            >
               GOATED Animes
            </a>
            <a
               href="#"
               className="block py-4 px-4 text-sm hover:bg-blue-600 hover:text-white rounded relative z-10"
            >
               Manga(soon)
            </a>
            <a
               href="/login"
               className="block py-4 px-4 text-sm hover:bg-blue-600 hover:text-white rounded relative z-10"
            >
               Login
            </a>
            <a
               href="/register"
               className="block py-4 px-4 text-sm hover:bg-blue-600 hover:text-white rounded relative z-10"
            >
               Signup
            </a>
         </div>
      </nav>
   );
}

export default Nav;
