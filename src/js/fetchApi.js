const all = 5;

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${all}&page=1`;
const divMoedas = document.getElementById("moedasAll");


function buscaAPi() {
    fetch(url).then(response => response.json())
        .then(data => {
            data.forEach(coin => {


                const { name, image } = coin;


                divMoedas.innerHTML += `
                <div class='moeda'>
                    <div class='nome'>
                        <span>${name}</span>
                    </div>
                    <div class='img'>   
                        <img class="coin-image" src='${image}'>
                    </div>
                </div>
            `;

            });
        }).catch(error => {
            console.log("deu erro" + error)
        })
}
buscaAPi();