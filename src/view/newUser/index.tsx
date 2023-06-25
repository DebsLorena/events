import React, { useState } from "react"
import './styles.css'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { app } from "../../config/firebase"
import { Navbar } from "../../components/navbar"

export function NewUser() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [msgType, setMsgType] = useState('')
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)

    const auth = getAuth(app);


    function cadastrar() {
        setLoading(true)

        if (!email || !senha) {
            setMsgType('erro')
            setMsg("Você precisa informar o email e senha para finalizar o cadastro!")
        }

        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCreate) => {
                setLoading(false)
                console.log("Cadastro efetuado:", userCreate.user);
                setMsgType('sucesso')
            })
            .catch((error) => {
                console.log("Erro ao cadastrar:", error);
                setMsgType('erro')
                // as msg recebidas não são estas switch não está funcionando
                switch (error) {
                    case 'Password should be at least 6 characters':
                        setMsg('A senha deve ter pelo menos 6 caracteres.')
                        break;
                    case 'The email address is already in use by another account.':
                        setMsg('Este email já está cadastrado.')
                        break;
                    case 'The email addres is badly formatted':
                        setMsg('O formato do seu email é inválido')
                        break;
                    default:
                        setMsg('Não foi possível cadastrar. Tente novamente mais tarde!')
                        break
                }
                setLoading(false)
            });

    }


    return (
        <>
            <Navbar />
            <div className="form-cadastro  d-flex align-items-center">
                <form className="text-center form-login mx-auto mt-5">
                    <h1 className="h3 mb-3 text-black font-weigth-bold">Cadastro</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" ></input>
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" ></input>

                    {loading ? <div className="spinner-border text-secondary" role="status"><span className="sr-only"></span></div>
                        : <button onClick={cadastrar} className="w-100 btn btn-lg btn-secondary" type="button">Cadastrar</button>
                    }
                    <div className="msg-login text-gray text-center my-5">
                        {msgType === 'sucesso' && <span><strong>WoW! </strong> Usuário cadastrado com sucesso! &#128526;</span>}
                        {msgType === 'erro' && <span><strong>Ops! </strong> {msg} &#128546;</span>}
                    </div>
                </form>
            </div>
        </>
    )
}