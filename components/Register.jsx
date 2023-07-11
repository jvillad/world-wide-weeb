'use client';
import { useState } from 'react';

export default function page() {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
         });

         if (response.ok) {
            const data = await response.json();
            console.log(data);
         } else {
            const errorData = await response.json();
            console.error(errorData);
         }
      } catch (error) {
         console.error(error);
         console.log(error);
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center ">
         <div className="bg-white p-16 rounded shadow-2xl w-2/3 max-w-[720px]">
            <h2 className="text-3xl font-bold mb-10 text-gray-800">
               Create Your Account
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
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
                     value={name}
                     onChange={(e) => setName(e.target.value)}
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
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
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
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
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