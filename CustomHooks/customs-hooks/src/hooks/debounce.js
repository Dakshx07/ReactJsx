const searchBackend = () => {
    console.log('Request sent to backend');
};

let timeoutId;

const debounceBackend = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(searchBackend, 30);
};

// Simulate multiple calls to debounceBackend
for (let i = 0; i < 5; i++) {
    debounceBackend();
}