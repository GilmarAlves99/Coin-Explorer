const ctx = document.getElementById('myChart').getContext('2d');

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1`;
const divMoedas = document.getElementById("moedasAll");
const listaApi = document.getElementById("lista");

function buscaAPi() {
    fetch(url)
        .then(response => response.json())
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
        })
        .catch(error => {
            console.log("deu erro" + error)
        });
}

function listaApis() {
    const urlAll = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`;
    fetch(urlAll)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                listaApi.innerHTML +=
                    `   
                    <div class='moedastotais'>
                        <div class='nome'>
                            <span>${element.name}</span>
                            <span>R$ ${element.current_price}</span>
                        </div>
                        <div class='img'>
                            <img class="coin-image" src='${element.image}'>
                        </div>
                    </div>`;
            });
            grafico(data);
        })
        .catch(error => {
            console.log("deu erro" + error)
        });
}

function grafico(data) {
    const labels = data.map(coin => coin.name);
    const values = data.map(coin => coin.current_price);

    var chartData = {
        labels: labels,
        datasets: [{
            label: 'Price in USD',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: true,
                text: 'Cryptocurrency Prices in USD',
                color: 'white'
            }
        }
    };

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: options
    });
}

listaApis();
buscaAPi();