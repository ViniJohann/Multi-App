import { useState } from "react";
import axios from "axios";
import "../styles.css"
import "./IPAddressFinder.module.css"
import { RiH5 } from "react-icons/ri";

function IPAddressFinder() {
    const [ip, setIP] = useState('')
    const [infos, setInfos] = useState({
        city: '',
        region: '',
        hostname: ''
    })

    const IPSearch = async () => {
        try{
            const response = await axios.get(`https://ipinfo.io/${ip}?token=f41f9f4777a399`)
            setInfos({
                ...infos,
                city: response.data.city,
                region: response.data.region,
                hostname: response.data.hostname
            })
        }catch(error){
            console.log('Erro: ', error)
        }
    }

    return (
        <div className="container">
            <div className="item">
                <h2 id="title">IP Address Finder</h2>
                <div className="app">
                    <input type="text" value={ip} placeholder="Enter the IP Address" onChange={(e) => setIP(e.target.value)}/>
                    <button onClick={IPSearch}>Verificar IP</button>
                    {infos.city && (<h1>Cidade: {infos.city}</h1>)}
                    {infos.region && (<h1>Região: {infos.region}</h1>)}
                    {infos.hostname && (<h1>Hostname: {infos.hostname}</h1>)}
                </div>
            </div>
        </div>
    )
}

export default IPAddressFinder