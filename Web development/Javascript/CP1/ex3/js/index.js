// Escreva uma função que calcule o imc de 5 pessoas, a função deve ler o peso(em kg) e a altura (em m), 
// calcula o imc e verifica em qual faixa o valor se encaixa.
/* as faixas são 
abaixo do peso(IMC < 18.5)
normal(18.5 <= imc < 25)
acima do peso (25 <= IMC < 30)
obesidade (IMC >= 30)
*/

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)

function HomePage(){

    return(
        <div>
            <Header title="Calculadora de IMC"/>
            <Body/>
        </div>
    );

}

function Header({title}){
    return <h1>{title ? title : 'Default title'}</h1>;
}
function Body(){
    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [imc, setImc] = React.useState(0);
    const [faixa, setFaixa] = React.useState(null);

    function handleClick(){
        setImc(peso / (altura * altura));
    };

    React.useEffect(() => {
        if (imc < 18.5){
            setFaixa("Abaixo do peso");
        } else if (imc >= 18.5 && imc < 25){
            setFaixa("Normal");
        } else if (imc >= 25 && imc < 30){
            setFaixa("Acima do peso");
        } else {
            setFaixa("Obesidade");
        }
    }, [imc]);

    return(
        <div>
            <label htmlFor="peso">Peso</label>
            <input type="number" id="peso" onChange={(e) => setPeso(e.target.value)}/>
            <label htmlFor="altura">Altura</label>
            <input type="number" id="altura" onChange={(e) => setAltura(e.target.value)}/>
            <button onClick={handleClick}>Calcular</button>
            <p>IMC: {imc}</p>
            <p>Faixa: {faixa}</p>
        </div>
    );
}

root.render(<HomePage/>)