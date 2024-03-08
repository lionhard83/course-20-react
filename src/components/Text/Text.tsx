import { useContext } from "react";
import { ThemeContext } from "../../App";

export const Text = () => {
    const theme = useContext(ThemeContext);
    const textColor = theme === 'dark' ? '#FFF' : '#000';
    return <h1 style={{color: textColor}}>Hello World</h1>
}