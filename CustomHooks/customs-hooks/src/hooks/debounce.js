let currentClock;
function searchBackend(){
    console.log("request send to backend");
    
}

function debounceBackend(){
    clearTimeout(currentClock);
    currentClock=setTimeout(searchBackend,30)
}

debounceBackend()
debounceBackend()
debounceBackend()
debounceBackend()
debounceBackend()