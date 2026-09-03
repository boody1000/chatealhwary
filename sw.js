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
            vibrate: [300, 100, 300, 100, 300], // اهتزاز قوي ومتكرر لجذب الانتباه مثل الواتساب
            tag: 'hawary-client-chat-msg', // منع تكرار الإشعارات المزعجة وتحديثها
            renotify: true, // إصدار تنبيه صوتي/اهتزاز حتى لو كان هناك إشعار سابق
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

// عند الضغط على الإشعار الخارجي، يفتح الموقع أو يعيد التركيز عليه فوراً
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    const targetUrl = event.notification.data.url || './clint.html';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if (client.url.includes('clint.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
