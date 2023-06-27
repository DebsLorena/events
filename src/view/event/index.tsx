import React from "react"
import { Navbar } from "../../components/navbar"

export function Event() {
    return (
        <>
            <Navbar />
            <div className="col-12 text-center">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold">Novo Evento</h3>
                </div>

                <form>
                    <div className="form-group">
                        <label>Título:</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Tipo do Evento:</label>
                        <select className="form-control">
                            <option disabled selected> Selecione um tipo</option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Eventos</option>
                        </select>

                    </div>
                </form>
            </div>
        </>
    )
}