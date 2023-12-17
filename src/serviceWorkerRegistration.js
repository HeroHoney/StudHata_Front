import { Workbox } from 'workbox-window';

function register() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js');

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        console.log('App updated');
      } else {
        console.log('App installed');
      }
    });

    wb.register()
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Error registering Service Worker:', error);
      });
  }
}

export { register };
