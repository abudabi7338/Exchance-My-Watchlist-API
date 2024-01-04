const price = document.querySelector('.price')
const change = document.querySelector('.change')
const symbol = document.querySelector('.symbols')
const name = document.querySelector('.full-name')

const stock1Prices = document.getElementById('stock-1').querySelector('.price')
const stock2Prices = document.getElementById('stock-2').querySelector('.price')
const stock3Prices = document.getElementById('stock-3').querySelector('.price')

const stock1Change = document.getElementById('stock-1').querySelector('.change')
const stock2Change = document.getElementById('stock-2').querySelector('.change')
const stock3Change = document.getElementById('stock-3').querySelector('.change')


const symbols = 'AAPL'

const apiUrl = `https://api.stockdata.org/v1/data/quote?api_token=${apiToken}&symbols=${symbols}`

async function getStockData() {
	try {
		const response = await fetch(apiUrl)
		const data = await response.json()

		if (data.meta.returned > 0) {
			data.data.forEach(stockInfo => {
				const ticker = stockInfo.ticker
				const name = stockInfo.name
				const price = stockInfo.price
				const dayChange = stockInfo.day_change

				console.log(`Symbol: ${ticker}, Nazwa: ${name}, Cena: ${price}, Zmiana dzienna: ${dayChange}%`)
			})
		} else {
			console.log('Brak wyników.')
		}
	} catch (error) {
		console.error('Wystąpił błąd podczas pobierania danych z API:', error)
	}
}

getStockData()

stock1Prices.textContent = 'price'
stock2Prices.textContent = 'price'
stock3Prices.textContent = 'price'

stock1Change.textContent = 'change'
stock2Change.textContent = 'change'
stock3Change.textContent = 'change'


