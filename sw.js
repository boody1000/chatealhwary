// Service Worker المتكامل لإدارة الإشعارات في الخلفية - شركة الهواري للزواج

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// استقبال أمر إظهار الإشعار من صفحة الشات الرئيسية
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const title = event.data.title || 'رسالة جديدة - شركة الهواري للزواج';
        const options = {
            body: event.data.body || 'لديك رسالة جديدة في الشات',
            icon: './22.jpg', // تأكد أن هذه الصورة موجودة في مشروعك
            badge: './22.jpg',
            vibrate: [200, 100, 200], // اهتزاز للهواتف
            data: { url: event.data.url || self.location.origin }
        };

        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
});

// عند الضغط على الإشعار الخارجي، يفتح الموقع أو يعيد التركيز عليه فوراً
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if ('focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(event.notification.data.url);
            }
        })
    );
});
