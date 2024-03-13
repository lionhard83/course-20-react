import { createContext, useState } from "react";
import { App2 } from "./App2"
import { Lang } from "./languages/lang";


export const LangContext = createContext('it');


export const LanguageContainer = () => {
    const [lang, setLang] = useState<Lang>('en');
    return (<LangContext.Provider value={lang}>
        
        <App2></App2>
        <button onClick={() => setLang(lang === 'it' ? 'en' : 'it')} >Change Language</button>
        <span>{lang}</span>
    </LangContext.Provider>)
}