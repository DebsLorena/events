import React, { useState } from "react"
import { Navbar } from "../../components/navbar"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { app } from "../../config/firebase"

export function NewPassword() {

    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const auth = getAuth(app);


    function NewPassword() {
        sendPasswordResetEmail(auth, email)
            .then((response) => {
                console.log("Usuário logado:", response);
                setMsg('Enviamos um link no seu email para você redefinir sua senha!')
            })
            .catch((error) => {
                console.log("Erro de login:", error);
                setMsg('Verifique se o email está correto!')
            });
    }


    return (
        <>
            <Navbar />
            <div className="form-cadastro">
                <form className="text-center form-login mx-auto mt-5">
                    <h3 className="mb-3 font-weight-bold"> Recuperar Senha</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email"></input>

                    <div className="msg my-4 text-center">
                        <span>{msg}</span>
                    </div>

                    <button onClick={NewPassword} type="button" className="btn btn-lg btn-block btn-secondary">Recuperar Senha</button>
                </form>
            </div>
        </>
    )
}