// Service Worker المتكامل لإدارة الإشعارات في الخلفية - شركة الهواري للزواج[cite: 3]

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// استقبال أمر إظهار الإشعار من صفحة الشات الرئيسية[cite: 3]
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const title = event.data.title || 'رسالة جديدة - شركة الهواري للزواج';[cite: 3]
        const options = {
            body: event.data.body || 'لديك رسالة جديدة في الشات',[cite: 3]
            icon: './22.jpg', // تأكد أن هذه الصورة موجودة في مشروعك[cite: 3]
            badge: './22.jpg',[cite: 3]
            vibrate: [300, 100, 300, 100, 300], // اهتزاز قوي ومتكرر لجذب الانتباه مثل الواتساب[cite: 3]
            tag: 'hawary-chat-msg', // منع تكرار الإشعارات المزعجة وتحديثها[cite: 3]
            renotify: true, // إصدار تنبيه صوتي/اهتزاز حتى لو كان هناك إشعار سابق[cite: 3]
            requireInteraction: false, // لضمان ظهور البانر من الأعلى كـ Heads-up والاستقرار بالشريط[cite: 3]
            actions: [
                { action: 'open', title: 'فتح المحادثة' }[cite: 3]
            ],
            data: { url: event.data.url || self.location.origin }[cite: 3]
        };

        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
});

// عند الضغط على الإشعار الخارجي أو بانر النزول، يفتح الموقع أو يعيد التركيز عليه فوراً[cite: 3]
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    const targetUrl = event.notification.data.url || './clint_2.html';[cite: 3]

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                // إذا كانت النافذة مفتوحة مسبقاً يتم عمل التركيز عليها[cite: 3]
                if (client.url.includes('clint_2.html') && 'focus' in client) {[cite: 3]
                    return client.focus();
                }
            }
            // إذا كان المتصفح مغلقاً، يتم فتح الرابط تلقائياً[cite: 3]
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
