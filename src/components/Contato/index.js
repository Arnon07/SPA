import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';


function Contato() {
  return (
    <div className="home" id="contato">
            <h1>Pagina Contato</h1>
            <h2>Telefone</h2>
            <Link smooth to="#home">Ir Para Home</Link>
    </div>
  );
}

export default Contato;
