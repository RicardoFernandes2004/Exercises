/* Crie uma função que leia o nome de uma fruta. Utilize uma estrutura 
condicional switch-case, caso maçã, retorne no console: “Não vendemos esta 
fruta aqui”. Caso banana, retorne: “Estamos com escassez de banana” e caso 
melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções 
e verifique o console do seu navegador. Crie também um default, que retornará 
está fruta não faz parte das frutas que me interessam.*/ 

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)
function HomePage(){
    return(
        <div>
            <Header title="Frutas"/>
            <Body/>
        </div>
    );
}
function Header({title}){ return <h1>{title ? title : 'Default title'}</h1>; }

function Body(){
    const [fruta, setFruta] = React.useState('');
    const [mensagem, setMensagem] = React.useState('');
    function handleClick(){
        switch(fruta){
            case 'maçã':
                setMensagem('Não vendemos esta fruta aqui');
                break;
            case 'banana':
                setMensagem('Estamos com escassez de banana');
                break;
            case 'melancia':
                setMensagem('Aqui está, são 3 reais o quilo');
                break;
            default:
                setMensagem('Esta fruta não faz parte das frutas que me interessam');
        }
    };
    return(
        <div>
            <label htmlFor="fruta">Qual fruta voce quer?</label>
            <input type="text" id="fruta" onChange={(fruta) => setFruta(fruta.target.value)}/>
            <button onClick={handleClick}>Verificar</button>
            <p>{mensagem}</p>
        </div>
    );
}

root.render(<HomePage/>)