// main.js
import '../css/style.css';
import { getCEPData } from './fetchCEP.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Qual seu CEP?</h1>
    <div>
        <input type="text" name="cep" id="cep_field" placeholder="Digite o CEP">
        <button type="submit" id="cep_get">GET</button>
    </div>
    <h2 id="cep">-</h2>
  </div>
`;

document.querySelector('#cep_get').addEventListener('click', () => {
    const cep = document.querySelector('#cep_field').value;
    const cepElement = document.querySelector('#cep');

    if (cep) {
        getCEPData(cep, cepElement);
    } else {
        cepElement.innerHTML = 'Por favor, insira um CEP.';
    }
});
