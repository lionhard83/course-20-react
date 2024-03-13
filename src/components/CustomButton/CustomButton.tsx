import { Button } from "@mui/material"
import { useContext } from "react"
import { LangContext } from "../../LanguageContainer"
import {KeyOfLang, lang} from "../../languages/lang";


export const CustomButton = (props: {text: KeyOfLang}) => {
    const currentLang = useContext(LangContext) as 'it' | 'en';
    const translations = lang[currentLang];
    console.log('translations:', translations);

    return (
            <Button key={props.text} sx={{ color: '#fff' }}>
                  {translations[props.text]}
                </Button>
)
}