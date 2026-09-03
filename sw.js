// Service Worker لإدارة الإشعارات في الخلفية على GitHub Pages

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const title = event.data.title || 'رسالة جديدة - شركة الهواري للزواج';
        const options = {
            body: event.data.body || 'لديك رسالة جديدة في الشات',
            icon: './22.jpg',
            badge: './22.jpg',
            vibrate: [300, 100, 300, 100, 300],
            tag: 'hawary-chat-msg',
            renotify: true,
            requireInteraction: false,
            actions: [
                { action: 'open', title: 'فتح المحادثة' }
            ],
            data: { url: event.data.url || self.location.origin }
        };

        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    const targetUrl = event.notification.data.url || './clint_2.html';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if (client.url.includes('clint_2.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
