/*Questão 05: Um homem decidiu ir a uma revenda comprar um carro. Ele deseja 
comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, 
motocicletas e caminhonetes. Utilizando uma estrutura switch/case, caso o 
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras 
opções, retorne: “Tem certeza de que não prefere um modelo hatch?”. Caso seja 
especificado um modelo que não está disponível, retorne no console: “Não 
trabalhamos com este tipo de automóvel aqui”*/

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)

function HomePage(){
    
        return(
            <div>
                <Header title="Revenda de carros"/>
                <Body/>
            </div>
        );
}

function Header({title}){ 
    return <h1>{title ? title : 'Default title'}</h1>; 
}

function Body(){
    const [carro, setCarro] = React.useState('');
    const [mensagem, setMensagem] = React.useState('');
    function handleClick(){
        switch(carro){
            case 'hatch':
                setMensagem('Compra efetuada com sucesso');
                break;
            case 'sedan':
                setMensagem('Tem certeza de que não prefere um modelo hatch?');
                break;
            case 'motocicleta':
                setMensagem('Tem certeza de que não prefere um modelo hatch?');
                break;
            case 'caminhonete':
                setMensagem('Tem certeza de que não prefere um modelo hatch?');
                break;
            default:
                setMensagem('');
                console.log('Não trabalhamos com este tipo de automóvel aqui');
        }
    };
    return(
        <div>
            <label htmlFor="carro">Qual carro voce quer?</label>
            <input type="text" id="carro" onChange={(carro) => setCarro(carro.target.value)}/>
            <button onClick={handleClick}>Verificar</button>
            <p>{mensagem}</p>
        </div>
    );
}

root.render(<HomePage/>)