import React from "react";
import './styles.css'
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        // <nav className="navbar navbar-expand-lg">
        //     <div className="container-fluid">
        //         <span className="navbar-brand text-white font-weight-bold">Eventos</span>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav ms-auto" >
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        //                     <Link className="nav-link" aria-current="page" to="/novo_usuario">Cadastrar</Link>
        //                     <Link className="nav-link" aria-current="page" to="/login">Login</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
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
                        <li className="nav-item ">
                            <Link className="nav-link text-white" aria-current="page" to="/cadastrar_eventos">Cadastrar</Link></li>
                        <li className="nav-item ">
                            <Link className="nav-link" aria-current="page" to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
