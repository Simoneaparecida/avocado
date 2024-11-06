// fetchCEP.js
export async function getCEPData(cep, element) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    try {
        const response = await fetch(url, { headers });
        const data = await response.json();

        if (data.erro) {
            element.innerHTML = 'CEP não encontrado.';
        } else {
            element.innerHTML = `
                ${data.logradouro}, ${data.complemento} - ${data.bairro}<br>
                ${data.localidade}/${data.uf}, ${data.cep}<br>
                ${data.ddd} - ${data.regiao}
            `;
        }
    } catch (error) {
        console.error('Erro ao buscar CEP:', error.message);
        element.innerHTML = 'Erro ao buscar dados. Tente novamente mais tarde.';
    }
}
