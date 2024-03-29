import { useContext, createContext, useState } from "react"; 

const DarkModeContext = createContext ()  // Creando mi contexto

export const useDarkModeContext = () => useContext(DarkModeContext)  

export const DarkModeProvider = (props) => {
    const [ darkMode, setDarkMode] = useState (false) //Booleano para dar contexto

    const toggleDarkMode = () => {
        setDarkMode(!darkMode) //Si darkMode es V, lo pasa a F o viceversa
        if(!darkMode){
            document.body.firstElementChild.classList.add('darkMode')
        } else{
            document.body.firstElementChild.classList.remove('darkMode')
        }
    }
    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )

 }
