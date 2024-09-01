import { useState } from "react";
import axios from "axios";
import "../styles.css"
import styles from "./LanguageTranslator.module.css"

function LanguageTranslator() {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('')
    const [sourceLang, setSourceLang] = useState('pt')
    const [targetLang, setTargetLang] = useState('en')
    
    const translateText = async () => {
        try {
            const response = await axios.get('https://api.mymemory.translated.net/get', {
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`
                }
            })
            console.log(response.data.responseData.translatedText)
            setTranslatedText(response.data.responseData.translatedText)
        }catch(error){
            console.error('Erro ao tradutor o texto: ', error)
        }
    }

    return (
        <div className="container">
            <div className="item">
                <h2 id="title">Language Translator</h2>
                <div className="app">
                    <label>Source Language</label>
                    <select value={sourceLang} onChange={(event) => setSourceLang(event.target.value)}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italiano</option>
                        <option value="pt">Portugues</option>
                    </select>
                    <label>Target Language</label>
                    <select value={targetLang} onChange={(event) => setTargetLang(event.target.value)}> 
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italiano</option>
                        <option value="pt">Portugues</option>
                    </select>

                    <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
                    <button onClick={translateText}>Translate</button>
                </div>
                <div id={styles.traslated}>
                    {translatedText && <p>{translatedText}</p>}
                </div>
            </div>
            
        </div>    
    )
}

export default LanguageTranslator