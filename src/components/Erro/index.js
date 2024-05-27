import { Link } from "react-router-dom";

function Erro (){
    return(
        <div>
            <h2>404 Not Found. </h2>

            <span>Encontramos essas paginas aqui:</span> <br/>
            <Link to="/">Home</Link> <br/>
            <Link to="/sobre">Sobre</Link> <br/>
            <Link to="/contato">Contato</Link>

        </div>
    )
}

export default Erro;