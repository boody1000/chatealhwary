// Service Worker لإدارة إشعارات الهواري للتعارف والزواج

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('push', function(event) {
    // تخصيص الإشعار عند استقبال رسائل الدفع
});

// استقبال رسالة الإشعار قادمة من صفحة المتصفح لعرضها مباشرة
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_CUSTOM_NOTIFICATION') {
        const title = event.data.title || 'الهواري للتعارف والزواج';
        const options = {
            body: event.data.body || 'لديك رسالة جديدة',
            icon: './22.jpg',
            badge: './22.jpg',
            vibrate: [300, 100, 300, 100, 300],
            tag: 'hawary-marriage-chat',
            renotify: true,
            requireInteraction: true,
            dir: 'rtl',
            data: { url: event.data.url || './clint.html' }
        };

        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if ('focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('./clint.html');
            }
        })
    );
});
