import { Link } from 'react-router-dom';

function Sobre() {
    return (
        <div>
            <h1>Pagina sobre a empresa</h1> 
            <br/>
            <Link to='/'>Home</Link>
            <br/>
            <Link to="/">Contato</Link>

        </div>
    );
}

export default Sobre;
