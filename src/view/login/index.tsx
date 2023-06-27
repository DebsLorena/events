import React, { useState } from "react";
import './styles.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../config/firebase'
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

export interface RootState {
	usuarioEmail: string;
	usuarioLogado: number
}

export function Login() {

	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [msgType, setMsgType] = useState('')
	const dispatch = useDispatch()

	const auth = getAuth(app);


	function logar() {
		signInWithEmailAndPassword(auth, email, senha)
			.then((userCredential) => {
				// Login bem-sucedido, faça o que desejar aqui
				console.log("Usuário logado:", userCredential.user);
				setMsgType('sucesso')
				setTimeout(
					() => {
						dispatch({ type: 'LOG_IN', usuarioEmail: email })
					}, 2000
				)
			})
			.catch((error) => {
				// Ocorreu um erro durante o login, trate-o aqui
				console.log("Erro de login:", error);
				setMsgType('erro')
			});
	}

	return (
		<div className="login-content d-flex align-items-center">
			{useSelector((state: RootState) => state.usuarioLogado) ? <Navigate to='/' /> : null}
			<form className="form-signin mx-auto">
				<div className="text-center mb-4">
					<h1 className="h3 mb-3 fw-normal text-white font-weight-bold">Login</h1>
				</div>
				<input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" id="floatingInput" placeholder="name@example.com" />
				<input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" id="floatingPassword" placeholder="Password" />

				<button onClick={logar} className="w-100 btn btn-lg btn-secondary" type="button">Entrar</button>

				<div className="msg-login text-white text-center my-5">
					{msgType === 'sucesso' && <span><strong>WoW! </strong> Você esta conectado! &#128526;</span>}
					{msgType === 'erro' && <span><strong>Ops! </strong> Verifique se a senha ou usuário estão corretos! &#128546;</span>}
				</div>

				<div className="opcoes-login mt-5 text-center">
					<Link to="/recuperar_senha" className="mx-2"> Recuperar Senha</Link>
					<span className="text-white">&#9733;</span>
					<Link to="/novo_usuario" className="mx-2"> Quero Cadastrar</Link>
				</div>

			</form>
		</div>
	)
}
