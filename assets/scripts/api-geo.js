let h2 = document.querySelector('#loc');

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitude: ${pos.coords.latitude}, longitude: ${pos.coords.longitude}`;
    
    let p = document.querySelector('#copyP');

    console.log(pos.coords.latitude, pos.coords.longitude)
    copyP.textContent = `${pos.coords.latitude}, ${pos.coords.longitude}`;
}

function error(err){
    console.log(err)
}

var watchID = navigator.geolocation.watchPosition(success, error);