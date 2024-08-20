// Escreva uma função que calcule o imc de 5 pessoas, a função deve ler o peso(em kg) e a altura (em m), 
// calcula o imc e verifica em qual faixa o valor se encaixa.
/* as faixas são 
abaixo do peso(IMC < 18.5)
normal(18.5 <= imc < 25)
acima do peso (25 <= IMC < 30)
obesidade (IMC >= 30)
*/

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function HomePage() {
  return (
    <div>
      <Header title="Calculadora de IMC" />
      <Body />
    </div>
  );
}

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function Body() {
  const [persons, setPersons] = React.useState([
    { peso: 0, altura: 0, imc: 0, faixa: null },
    { peso: 0, altura: 0, imc: 0, faixa: null },
    { peso: 0, altura: 0, imc: 0, faixa: null },
    { peso: 0, altura: 0, imc: 0, faixa: null },
    { peso: 0, altura: 0, imc: 0, faixa: null },
  ]);

  function handleClick(index) {
    const newPersons = [...persons];
    const imc = newPersons[index].peso / (newPersons[index].altura * newPersons[index].altura);
    newPersons[index].imc = imc;
    if (imc < 18.5) {
      newPersons[index].faixa = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      newPersons[index].faixa = 'Normal';
    } else if (imc >= 25 && imc < 30) {
      newPersons[index].faixa = 'Acima do peso';
    } else {
      newPersons[index].faixa = 'Obesidade';
    }
    setPersons(newPersons);
  }

  return (
    <div>
      {persons.map((person, index) => (
        <div key={index}>
          <label htmlFor={`peso${index}`}>Peso</label>
          <input type="number" id={`peso${index}`} onChange={(e) => {
            const newPersons = [...persons];
            newPersons[index].peso = parseFloat(e.target.value);
            setPersons(newPersons);
          }} />
          <label htmlFor={`altura${index}`}>Altura</label>
          <input type="number" id={`altura${index}`} onChange={(e) => {
            const newPersons = [...persons];
            newPersons[index].altura = parseFloat(e.target.value);
            setPersons(newPersons);
          }} />
          <button onClick={() => handleClick(index)}>Calcular</button>
          <p>IMC: {person.imc}</p>
          <p>Faixa: {person.faixa}</p>
        </div>
      ))}
    </div>
  );
}

root.render(<HomePage />);
