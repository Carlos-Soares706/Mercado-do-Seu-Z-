document.getElementById('findStore').addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            document.getElementById('location').textContent = `Sua localização é: Latitude: ${lat}, Longitude: ${lon}.`;
            // Simulação de uma loja mais próxima com base nas coordenadas
            document.getElementById('promo').textContent = 'Promoção especial: Desconto de 20% nas frutas!';
        }, () => {
            document.getElementById('location').textContent = 'Não foi possível obter sua localização.';
        });
    } else {
        document.getElementById('location').textContent = 'Geolocalização não é suportada pelo seu navegador.';
    }
});
