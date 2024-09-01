import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "../styles.css"
import "./QRCodeGenerator.module.css"

function QRCodeGenerator() {    
    const [text, setText] = useState('')

    return (
        <div className="container">
            <div className="item">
                <h2 id="title">QRCode Generator</h2>
                <div className="app">
                    <label>Coloque o Texto:</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <div>
                        {text && (<QRCodeSVG value={text} size={300} bgColor={"#000000"} fgColor={"#fefbfb"}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QRCodeGenerator