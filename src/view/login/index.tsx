import React from "react";
import './styles.css'

export function Login() {
	return (
		<div className="login-content d-flex align-items-center">
			<form className="form-signin mx-auto">
				<div className="text-center mb-4">
					<h1 className="h3 mb-3 fw-normal text-white font-weight-bold">Login</h1>
				</div>
				<input type="email" className="form-control my-2" id="floatingInput" placeholder="name@example.com" />
				<input type="password" className="form-control my-2" id="floatingPassword" placeholder="Password" />

				<button className="w-100 btn btn-lg btn-secondary" type="submit">Entrar</button>

				<div className="msg-login text-white text-center my-5">
					<span><strong>WoW!</strong>Você esta conectado! &#128526;</span>
					<br />
					<span><strong>Ops!</strong>Verifique se a senha ou usuário estão corretos! &#128546;</span>
				</div>

				<div className="opcoes-login mt-5 text-center">
					<a href="#" className="mx-2"> Recuperar Senha</a>
					<span className="text-white">&#9733;</span>
					<a href="#" className="mx-2"> Quero Cadastrar</a>
				</div>

			</form>
		</div>
	)
}
