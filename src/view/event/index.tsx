import React, { useState } from "react"
import { Navbar } from "../../components/navbar"

export function Event() {

    const [msgType, setMsgType] = useState('')


    return (
        <>
            <Navbar />
            <div className="col-12 mt-5">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold text-center">Novo Evento</h3>
                </div>

                <form>

                    <div className="form-group mb-3">
                        <label>Título:</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="form-group mb-3">
                        <label>Tipo do Evento:</label>
                        <select className="form-control">
                            <option disabled selected> Selecione um tipo</option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Eventos</option>
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label>Descrição do Evento:</label>
                        <textarea className="form-control" rows={3}></textarea>
                    </div>

                    <div className="form-group row ">
                        <div className="col-6 mb-3">
                            <label>Data:</label>
                            <input type="date" className="form-control"></input>
                        </div>

                        <div className="col-6 mb-3">
                            <label>Hora:</label>
                            <input type="time" className="form-control"></input>
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <label>Upload da Foto:</label>
                        <input type="file" className="form-control"></input>
                    </div>

                    <button className="w-100 btn btn-lg btn-secondary mt-3" type="button">Publicar evento</button>

                    <div className="msg-login text-gray text-center my-5">
                        {msgType === 'sucesso' && <span><strong>WoW! </strong> Evento Publicado! &#128526;</span>}
                        {msgType === 'erro' && <span><strong>Ops! </strong> Não foi possível publicar o evento! &#128546;</span>}
                    </div>

                </form>
            </div>
        </>
    )
}