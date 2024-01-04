const apiToken = '#####'

const stockSymbols = ['AAPL', 'MSFT', 'AMZN']

function updateStockData(symbolElement, priceElement, changeElement, apiToken, symbol) {
	const apiUrl = `https://api.stockdata.org/v1/data/quote?api_token=${apiToken}&symbols=${symbol}`

	try {
		fetch(apiUrl)
			.then(response => response.json())
			.then(data => {
				if (data.meta.returned > 0) {
					const stockInfo = data.data[0]
					const price = stockInfo.price
					const dayChange = stockInfo.day_change

					symbolElement.textContent = stockInfo.ticker
					priceElement.textContent = `${price}`
					changeElement.textContent = `${dayChange}%`

					if (dayChange < 0) {
						changeElement.style.backgroundColor = 'var(--font-color-text-minus)'
					} else {
					}
				} else {
					console.log('Brak wyników.')
				}
			})
			.catch(error => console.error('Wystąpił błąd podczas pobierania danych z API:', error))
	} catch (error) {
		console.error('Wystąpił błąd podczas pobierania danych z API:', error)
	}
}

function getStockData() {
	const stock1Symbol = document.getElementById('stock-1').querySelector('.symbols')
	const stock1Price = document.getElementById('stock-1').querySelector('.price')
	const stock1Change = document.getElementById('stock-1').querySelector('.change')

	const stock2Symbol = document.getElementById('stock-2').querySelector('.symbols')
	const stock2Price = document.getElementById('stock-2').querySelector('.price')
	const stock2Change = document.getElementById('stock-2').querySelector('.change')

	const stock3Symbol = document.getElementById('stock-3').querySelector('.symbols')
	const stock3Price = document.getElementById('stock-3').querySelector('.price')
	const stock3Change = document.getElementById('stock-3').querySelector('.change')

	updateStockData(stock1Symbol, stock1Price, stock1Change, apiToken, stockSymbols[0])
	updateStockData(stock2Symbol, stock2Price, stock2Change, apiToken, stockSymbols[1])
	updateStockData(stock3Symbol, stock3Price, stock3Change, apiToken, stockSymbols[2])
}

getStockData()
