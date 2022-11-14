async function criptomonedas(){
    
    const cripto = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    
    const datos = await cripto.json()
    
    let filas = []

    datos.forEach( (element, index) => {
        let fila = `
            <tr>
                <td>${index+1}</td>
                <td>${element.image}</td>
                <td>${element.name}</td>
                <td>${element.symbol}</td>
                <td>${element.current_price}</td>
                <td>% ${element.price_change_percentage_24h}</td>
                <td>${element.total_volume}</td>
            </tr>
        `
        filas.push(fila)
    });
    document.getElementById("tbody").innerHTML = filas.join('')
}
criptomonedas()