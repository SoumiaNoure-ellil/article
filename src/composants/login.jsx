export default function Login() {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-black">
     <div className="w-full max-w-md space-y-8">
      
       <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
         Chic&Click
       </h1>

      
       <form  className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-orange-500/20">
         <div className="space-y-6">
          
           <div>
             <label 
               htmlFor="email" 
               className="block text-orange-400 text-sm font-medium mb-2"
             >
               Email
             </label>
             <input
               type="email"
               id="email"
               name="email"
              
               className="w-full px-4 py-3 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
               placeholder="votre@email.com"
             />
            
           </div>

          
           <div>
             <label 
               htmlFor="password" 
               className="block text-orange-400 text-sm font-medium mb-2"
             >
               Mot de passe
             </label>
             <input
               type="password"
               id="password"
               name="password"
              
               className="w-full px-4 py-3 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
               placeholder="••••••••"
             />
            
           </div>

           
           <div className="flex items-center justify-between">
             <div className="flex items-center">
               <input
                 id="remember-me"
                 name="remember-me"
                 type="checkbox"
                 className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-orange-500 focus:ring-orange-500/50"
               />
               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                 Se souvenir de moi
               </label>
             </div>

             <div className="text-sm">
               <a href="#" className="font-medium text-orange-500 hover:text-orange-400">
                 Mot de passe oublié?
               </a>
             </div>
           </div>

           
           <button
             type="submit"
            className="text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/30">
           </button>

          
           <p className="text-center text-sm text-gray-400">
             Pas encore de compte?{' '}
             <a href="/signup" className="font-medium text-orange-500 hover:text-orange-400">
               S'inscrire
             </a>
           </p>
         </div>
       </form>
     </div>
   </div>
 );
}