const searchBackend = () => {
    console.log('Request sent to backend');
};

Remove the `console.log` statement from the `searchBackend` function before deploying to production.

const debounceBackend = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(searchBackend, 30);
};

// Simulate multiple calls to debounceBackend
for (let i = 0; i < 5; i++) {
    debounceBackend();
}