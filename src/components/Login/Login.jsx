import { useState } from "react";

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Usuario Cadastrado')
        setUser('')
        setPassword('')
    }

    return(
        <div className="container">
            <div className="item">
                <h2 id="title">Login</h2>
                <div className="app">
                    <form onSubmit={handleSubmit}>
                    <label>Usuário: </label>
                    <input type="text" value={user} placeholder="Digite seu usuário..." onChange={(e) => setUser(e.target.value)}/>
                    <br />
                    <label>Senha: </label>
                    <input type="text" value={password} placeholder="Digite sua senha..." onChange={(e) => setPassword(e.target.value)}/>
                    <br />
                    <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login