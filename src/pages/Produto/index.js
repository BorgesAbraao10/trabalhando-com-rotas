import { useParams } from "react-router-dom";

function Produto (){
    const { id } = useParams();
    return(
        <div>
            <h2>Pagina detalhe do Produto:</h2>
            <p> O produto disponível no estoque é { id }.</p>
        </div>
    )
}

export default Produto;