import { useEffect, useRef } from 'react'
import { useLocalStorage} from '../../utils/useLocalStorage'
import detectDarkMode from '../../utils/detectDarkMode'
import sun from './sun.svg'
import moon from './moon.svg'
import './style.css'

const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('daktMode', detectDarkMode())

    const btnRef = useRef(null);


    useEffect(() =>{
        if (darkMode ==='dark'){
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active')
        }else{
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    },[darkMode])


    useEffect(()=>{
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e)=>{
            const newColorScheme = e.matches ? 'dark' : 'light';
            setDarkMode(newColorScheme);
        });
    },[])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    return ( 
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="sun" className="dark-mode-btn__icon"/>
            <img src={moon} alt="moon" className="dark-mode-btn__icon"/>
    </button>
     );
}
 
export default BtnDarkMode;