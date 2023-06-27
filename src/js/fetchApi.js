 const all = 5;

 const url = `https:api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${all}&page=1`;
 const divMoedas = document.getElementById("moedasAll");
 const listaApi = document.getElementById("lista")

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



 function listaApis() {
     const urlAll = `https:api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1`;
     fetch(urlAll)
         .then(response => response.json())
         .then(data => data.forEach(element => {
             listaApi.innerHTML +=
                 `   
                 <div class='moedastotais'>
                    <div class='nome'>
                        <span>${element.name}</span>
                    </div>
                    <div class='img'>
                        <img class="coin-image" src='${element.image}'>
                    </div>
                </div>`
         })).catch(error => {
             console.log("deu erro" + error)
         })
 }


 listaApis();
 buscaAPi();