window.onload = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/moje-pwa/sw.js').then(() => {
            console.log('Service Worker zarejestrowany!');
        });
    }
};
