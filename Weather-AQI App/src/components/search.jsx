import {useState} from 'react';
 function Search({onSearch}){
    const[city,setCity] = useState('');
    const hsearch = (e)=>{
        if(!city.trim()){
            return;
        }
        onSearch(city);
    }
    
    return(
        <div className="flex items-center gap-2 w-full">
            <input type="text" placeholder='search a city' value = {city} onChange={(e)=>setCity(e.target.value)} className="w-full rounded-full bg-purple-300 placeholder:text-violet-800/50 py-3 pl-11 pr-4 text-violet-800 outline-none focus:ring-0" />
            <button onClick={hsearch} className="grid aspect-square h-12 w-12 place-items-center rounded-full bg-violet-600 outline-none transition-colors duration-200 ease-in-out hover:bg-violet-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-5 w-5">
            <path d="m9 18 6-6-6-6" />
          </svg></button>
        </div>
    )    
 }
 export default Search