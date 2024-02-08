function fetchData(callback) {
    setTimeout(function () {
        const data = 'This is the fetched data!';
        callback(data);
    }, 2000);
}

function handleData(data) {
    console.log('Handling the data:', data);
}

fetchData(handleData);
console.log('Fetching data...'); 
