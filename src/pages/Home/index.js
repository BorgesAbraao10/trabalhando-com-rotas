import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bem vindo a pagína Home</h1>
            <span>Navegue na sua Home</span>
            <br/> <br/>
<Link to="/sobre">Sobre</Link>
<br/>
<Link to="/contato">Contato</Link>

        </div>
    );
}

export default Home;