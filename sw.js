// Service Worker المتكامل لإدارة الإشعارات في الخلفية - شركة الهواري للزواج[cite: 5]

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// استقبال أمر إظهار الإشعار من صفحة الشات الرئيسية[cite: 5]
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const title = event.data.title || 'رسالة جديدة - شركة الهواري للزواج';
        const options = {
            body: event.data.body || 'لديك رسالة جديدة في الشات',
            icon: './22.jpg', // تأكد أن هذه الصورة موجودة في مشروعك[cite: 5]
            badge: './22.jpg',
            vibrate: [300, 100, 300, 100, 300], // اهتزاز قوي ومتكرر لجذب الانتباه مثل الواتساب
            tag: 'hawary-chat-msg', // منع تكرار الإشعارات المزعجة وتحديثها
            renotify: true, // إصدار تنبيه صوتي/اهتزاز حتى لو كان هناك إشعار سابق
            requireInteraction: false, // لضمان ظهور البانر من الأعلى كـ Heads-up والاستقرار بالشريط
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

// عند الضغط على الإشعار الخارجي أو بانر النزول، يفتح الموقع أو يعيد التركيز عليه فوراً[cite: 5]
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    const targetUrl = event.notification.data.url || './clint_2.html';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                // إذا كانت النافذة مفتوحة مسبقاً يتم عمل التركيز عليها
                if (client.url.includes('clint_2.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            // إذا كان المتصفح مغلقاً، يتم فتح الرابط تلقائياً
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
