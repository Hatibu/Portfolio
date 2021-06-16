import {useEffect} from 'react'
import {useState} from 'react'
export default function useDarkMode() {
    const [theme, setTheme] = useState("light");
    const colorTheme = 'dark' ? 'light':'light';
   useEffect(()=>{
       const root = document.documentElement;
       root.classList.remove(colorTheme);
       root.classList.add(theme);
       console.log(colorTheme);
   },[theme, colorTheme]);
   return [colorTheme,setTheme];
}
