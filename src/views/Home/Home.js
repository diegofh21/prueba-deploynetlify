import React, { useState } from 'react';
import Axios from 'axios';
import mmxLogo from '../../img/MULTIMAX-MCBO.jpeg'

import Header from '../../components/Header';

import '../../index.css';

export default function Home() {

  const [buscarProd, setBuscarProd] = useState('');

  const [marca, setMarca] = useState('');
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tiempo, setTiempo] = useState('');
  const [centro, setCentro] = useState('');
  const [avisoProd, setAvisoProd] = useState('');
  const [aviso, setAviso] = useState('');

  const Buscar = () => {
    Axios.get(`http://10.10.29.85:3001/producto/${buscarProd}`).then((res) => {
      console.log(res.data.status)
      setCodigo(res.data[0].codigo);
      setMarca(res.data[0].marca);
      setDescripcion(res.data[0].producto);
      setTiempo(res.data[0].tiempo_garantia)
      setCentro(res.data[0].centro_servicio)
      setAvisoProd('')
      if (res.data[0].tiempo_garantia === '' || res.data[0].centro_servicio === '') {
        setAviso('**En caso de que el producto consultado no tenga tiempo de garantía y/o centro de servicio por favor consultar la información que requiera con el departamento**')
      }
      else{
        setAviso('')
      }
    }).catch((error) => {
      if (buscarProd === '') {
        setAvisoProd('**No ha ingresado ningún código, por favor ingrese uno e intente nuevamente.**')
        setAviso('')
      }
      else {
        setAvisoProd("**El código ingresado no existe o está errado, verifique e intente nuevamente.**")
        setAviso('')
      }
      setMarca('');
      setCodigo('');
      setDescripcion('');
      setTiempo('');
      setCentro('');
    })
  }

  function CallBuscar(e) {
    if (e.key === "Enter") {
      Buscar();
    }
  }

  return (
    <>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12 text-center">
            <img src={mmxLogo} alt="Multimax Maracaibo Logo" className="img-fluid w-50 shadow" />
          </div>
        </div>
      </div>

      <div className="container mt-5 d-sm-block">
        <div className="row">
          <div className="col text-end pt-2">
            <label htmlFor="buscarProducto"><strong>Código de Producto:</strong></label>
          </div>
          <div className="col">
            <input type="text" name="buscarProducto" id="producto" className="form-control" placeholder="Ingrese el código del producto" onChange={(e) => {
              setBuscarProd(e.target.value);
            }} onKeyPress={(e) => CallBuscar(e)} />
          </div>
          <div className="col">
            <button className="btn btn-success" onClick={Buscar}>Buscar tiempo de garantía</button>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col text-center">
          <h6 className="text-danger">{avisoProd}</h6>
        </div>
      </div>

      <div className="container mt-5 bg-red shadow w-50 p-4">
        <div className="row">
          <div className="col text-center">
            <h4 className="pe-5">Marca:</h4>
          </div>
          <div className="col">
            <h5 className="text-start">{marca}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h4 className="pe-5">Código:</h4>
          </div>
          <div className="col">
            <h5 className="text-start">{codigo}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h4 className="pe-5">Producto:</h4>
          </div>
          <div className="col">
            <h5 className="text-start">{descripcion}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h4 className="pe-5">Tiempo de garantía:</h4>
          </div>
          <div className="col">
            <h5 className="text-start">{tiempo}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h4 className="pe-5">Centro de Servicio:</h4>
          </div>
          <div className="col">
            <h5 className="text-start">{centro}</h5>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <h6 className="text-danger">{aviso}</h6>
          </div>
        </div>
      </div>
    </>
  )
}