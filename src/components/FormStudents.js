import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createItem } from '../application/api';
import { getMunicipios } from '../helpers/getMunicipios';
import { ModalConfirm } from '../helpers/ModalConfirm';
import { SendEmail } from '../helpers/SendEmail';
import { validateSelects } from '../helpers/validateSelects';
import { CityOptions } from './CityOptions';
import { Overlay } from './Overlay';


export const FormStudents = () => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [grado, setGrado] = useState('0');
    const [edad, setEdad] = useState(10);
    const [genero, setGenero] = useState('0');
    const [tipoDoc, setTipoDoc] = useState('0');
    const [documento, setDocumento] = useState('');
    const [colegio, setColegio] = useState('0');
    const [municipio, setMunicipio] = useState('0');
    const [curso, setCurso] = useState('0');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    getMunicipios();

    return (
        <form className='form' id='form' action=''
            onSubmit={
                (e) => {
                    e.preventDefault();
                    const { message, validate } = validateSelects(genero, grado, tipoDoc, colegio, municipio, curso);
                    if (validate != false) {
                        const student =
                            { nombres, apellidos, grado, edad, genero, tipoDoc, documento, colegio, municipio, curso, email };
                        setLoading(true);


                        createItem(student)
                            .then((data) => {
                                setLoading(false);
                                ModalConfirm(email);

                                SendEmail(nombres.split(' ')[0], curso, email)
                                    .then((data) => {
                                        console.log(data);
                                    });
                            });

                        setNombres(''); setApellidos(''); setGrado(''); setEdad(''); setTipoDoc('');
                        setDocumento(''); setColegio(''); setMunicipio(''); setCurso(''); setEmail('');
                    } else {
                        Swal.fire('Error de formulario', message, 'warning');
                    }

                }
            }
        >
            <div className="form-row">
                <div className="form-control">
                    <label htmlFor="Nombres" className="form-label">Nombres</label>
                    <input type="text" className="form-input" placeholder='Nombres' value={nombres}
                        onChange={(e) => setNombres(e.target.value)} name='Nombres' required />
                </div>

                <div className="form-control">
                    <label htmlFor="Apellidos" className="form-label">Apellidos</label>
                    <input type="text" className="form-input" placeholder='Apellidos' value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)} name='Apellidos' required />
                </div>
            </div>

            <div className="form-control">
                <label htmlFor="grado" className="form-label">Grado en curso</label>
                <select className="form-select" name="grado" id="grado" value={grado}
                    onChange={(e) => setGrado(e.target.value)}>
                    <option value="0">-- Seleccione grado --</option>
                    <option className="select-control" value="10">10</option>
                    <option className="select-control" value="11">11</option>
                </select>
            </div>

            <div className="form-row">
                <div className="form-control-50">
                    <label htmlFor="Edad" className="form-label">Edad</label>
                    <input type="number" min={10} max={30} className="form-input-50" placeholder='Edad' value={edad}
                        onChange={(e) => setEdad(e.target.value)} name='Edad' required />
                </div>

                <div className="form-control-50">
                    <label htmlFor="Genero" className="form-label">Genero</label>
                    <select className="form-input-50" placeholder='Genero' value={genero}
                        onChange={(e) => setGenero(e.target.value)} name='Genero' required>

                        <option value="0">-- Seleccione genero --</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                        <option value="NN">Prefiero reservarlo</option>
                    </select>
                </div>
            </div>


            <div className="form-control">
                <label htmlFor="tipo_doc" className="form-label">Tipo De Documento</label>
                <select className="form-select" name="tipo_doc" id="tipo_doc" value={tipoDoc}
                    onChange={(e) => setTipoDoc(e.target.value)}>
                    <option value="0">-- Seleccione tipo de documento --</option>
                    <option className="select-control" value="TI">Tarjeta de identidad</option>
                    <option className="select-control" value="CC">Cedula de Ciudadania</option>
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="Documento" className="form-label">Número de documento</label>
                <input type="text" className="form-input" placeholder='Número de documento' value={documento}
                    onChange={(e) => setDocumento(e.target.value)} name='Documento' required />
            </div>

            <div className="form-control">
                <label htmlFor="colegio" className="form-label">Colegio</label>
                <select className="form-select" name="colegio" id="colegio" value={colegio}
                    onChange={(e) => setColegio(e.target.value)}>
                    <option value="0">-- Seleccione colegio --</option>
                    <option className="select-control" value="INTECSA">Institución educativa tecnica comercial de Santo Tomás</option>
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="Municipio" className="form-label">Municipio de residencia</label>
                <select className="form-select" value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)} name='Municipios' required>
                    <option value="0">-- Municipio de residencia --</option>
                    <CityOptions ciudades={getMunicipios()}></CityOptions>
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="Email" className="form-label">Correo Electronico</label>
                <input type="email" className="form-input" placeholder='Correo Electronico' value={email}
                    onChange={(e) => setEmail(e.target.value)} name='Email' required />
            </div>

            <div className="form-control">
                <label htmlFor="curso" className="form-label">Curso a elegir</label>
                <select name="curso" id="curso" className="form-select" value={curso}
                    onChange={(e) => setCurso(e.target.value)}>
                    <option value="0"> ¡Elige un curso! </option>
                    <option value="Building your future business">Building your future business</option>
                    <option value="Diseño de una nueva realidad">Diseño de una nueva realidad</option>
                    <option value="Programando el futuro">Programando el futuro</option>
                </select>
            </div>
            {
                loading === true && <Overlay></Overlay>
            }

            <input type='submit' className='form-button' value='Inscribirme'></input>
        </form>
    )
}
