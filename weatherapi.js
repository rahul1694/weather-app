export default {
    getLocationData: function(location) {
        const API_KEY = '777a58598700a9892e1bb4047ec6534b';
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
            .then(res => res.json())
            .catch(error => console.log(error));
    }
}

