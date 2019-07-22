import weatherapi from './weatherapi';

let searchBtn = document.getElementById('search-btn');

function setResValues(data) {
    
    document.getElementById('loc-name').innerHTML = data.name + ',' + data.sys.country;
    document.getElementById('loc-country').src=`http://openweathermap.org/images/flags/${data.sys.country.toLowerCase()}.png`;
}

function searchLocation(){
    const searchInput = document.getElementById('search-input').value;

    if(searchInput === '') {
        const div = document.createElement('div');
        div.className = 'search-error';
        div.appendChild(document.createTextNode('Please enter a valid location.'));

        searchBtn.parentNode.insertBefore(div, searchBtn.nextSibling);
        
        setTimeout(()=> {
            document.querySelector('.search-error').remove();
        },3000)
    } else {
        weatherapi.getLocationData(searchInput)
            .then(data => {
                setResValues(data);
            })
    }
}

searchBtn.addEventListener('click', searchLocation);

