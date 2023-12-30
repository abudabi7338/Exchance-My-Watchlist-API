const apiKey = '4c0a558fbc790e049a2671a70c17702f'
const apiUrl = 'http://api.marketstack.com/v1/eod'


fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('Błąd pobierania danych:', error);
  });