document.addEventListener('DOMContentLoaded', function() {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'bdf2aab84b44b881f0db0249';

    // API endpoint for USD to PHP exchange rate
    const usdToPhpUrl = `https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`;

    // API endpoint for AUD to PHP exchange rate
    const audToPhpUrl = `https://open.er-api.com/v6/latest/AUD?apikey=${apiKey}`;

    // Fetch the exchange rate data for USD to PHP
    fetch(usdToPhpUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the exchange rate for USD to PHP
            const usdToPhpRate = data.rates.PHP;

            // Display the exchange rate for USD to PHP on the page
            const usdToPhpElement = document.getElementById('usdToPhpRate');
            usdToPhpElement.innerHTML = `<p>1 USD = ${usdToPhpRate} PHP</p>`;
        })
        .catch(error => {
            console.error('Error fetching USD to PHP exchange rate:', error);
        });

    // Fetch the exchange rate data for AUD to PHP
    fetch(audToPhpUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the exchange rate for AUD to PHP
            const audToPhpRate = data.rates.PHP;

            // Display the exchange rate for AUD to PHP on the page
            const audToPhpElement = document.getElementById('audToPhpRate');
            audToPhpElement.innerHTML = `<p>1 AUD = ${audToPhpRate} PHP</p>`;
        })
        .catch(error => {
            console.error('Error fetching AUD to PHP exchange rate:', error);
        });
});
