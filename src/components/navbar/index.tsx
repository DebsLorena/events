import React from "react";
import './styles.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../view/login";



export function Navbar() {

    const usuarioLogado = useSelector((state: RootState) => state.usuarioLogado);
    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <span className="navbar-brand  text-white font-weight-bold"  >Navbar</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {usuarioLogado > 0 ?
                            <>
                                <li className="nav-item "><Link className="nav-link text-white" aria-current="page" to="/criar_evento">Publicar Evento</Link></li>
                                <li className="nav-item "><Link className="nav-link" aria-current="page" to="/">Meus Eventos</Link></li>
                                <li className="nav-item "><Link className="nav-link" aria-current="page" onClick={() => dispatch({ type: 'LOT_OUT' })} to="#" >Sair</Link></li>
                            </>
                            :
                            <>
                                <li className="nav-item "><Link className="nav-link text-white" aria-current="page" to="/novo_usuario">Cadastrar</Link></li>
                                <li className="nav-item "><Link className="nav-link" aria-current="page" to="/login">Login</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
