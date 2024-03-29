'use client';
import { useState } from 'react';

export default function Register() {
   const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
   });

   const [displayNotif, setDisplayNotif] = useState(false);
   const [message, setMessage] = useState('');
   const [error, setError] = useState();

   const registerUser = async (e) => {
      e.preventDefault();
      setError(false);
      setMessage('');
      try {
         const response = await fetch('/api/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
         });
         setDisplayNotif(true);
         if (response.ok) {
            const status = await response.json();
            console.log(status);
            setUser({
               name: '',
               email: '',
               password: '',
            });
            setMessage(status?.message);
         } else {
            const errorData = await response.json();
            console.error(errorData);
            setError(true);
            setMessage(errorData?.error);
         }
      } catch (error) {
         console.error(error);
         setMessage(error);
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center ">
         <div className="bg-white p-16 rounded shadow-2xl w-2/3 max-w-[720px]">
            {displayNotif && (
               <div
                  className={`text-xl font-bold text-center my-4 ${
                     error ? `text-[#dc3545]` : `text-[#28a745]`
                  }`}
               >
                  <h1>{message}</h1>
               </div>
            )}
            <h2 className="text-3xl font-bold mb-10 text-gray-800">
               Create Your Account
            </h2>

            <form className="space-y-5" onSubmit={registerUser}>
               <div>
                  <label className="block mb-1 font-bold text-gray-500">
                     Name
                  </label>
                  <input
                     id="name"
                     name="name"
                     type="text"
                     required
                     autoComplete="name"
                     value={user.name}
                     onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                     }
                     className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  />
               </div>

               <div>
                  <label className="block mb-1 font-bold text-gray-500">
                     Email
                  </label>
                  <input
                     id="email"
                     name="email"
                     required
                     type="email"
                     autoComplete="email"
                     value={user.email}
                     onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                     }
                     className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  />
               </div>

               <div>
                  <label className="block mb-1 font-bold text-gray-500">
                     Password
                  </label>
                  <input
                     id="password"
                     name="password"
                     required
                     autoComplete=""
                     type="password"
                     value={user.password}
                     onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                     }
                     className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  />
               </div>
               <div className="flex items-center">
                  <input type="checkbox" id="agree" required />
                  <label className="ml-2 text-gray-700 text-sm">
                     I agree to the terms and privacy.
                  </label>
               </div>

               <button
                  className="block w-full bg-[#ff9f1c] hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"
                  type="submit"
               >
                  Sign Up
               </button>
            </form>
         </div>
      </div>
   );
}
