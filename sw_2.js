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
            vibrate: [300, 150, 300, 150, 300], // نمط اهتزاز قوي شبيه بالميسنجر
            tag: 'hawary-chat-notification',    // لتجميع الإشعارات وعدم تكرارها عشوائياً
            renotify: true,                     // إصدار تنبيه صوتي/اهتزاز حتى لو كان هناك إشعار سابق
            requireInteraction: true,           // يبقى الإشعار ظاهراً على الشاشة حتى يتفاعل معه المستخدم
            data: { url: event.data.url || self.location.origin },
            actions: [
                { action: 'open_chat', title: '💬 فتح المحادثة والرد' },
                { action: 'dismiss', title: '✖️ إغلاق' }
            ]
        };

        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
});

// عند الضغط على الإشعار أو الأزرار التفاعلية
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    // إذا ضغط المستخدم على زر الإغلاق
    if (event.action === 'dismiss') {
        return;
    }

    // افتراضي أو عند الضغط على زر فتح المحادثة
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if ('focus' in client) {
                    client.focus();
                    // إرسال أمر داخلي لفتح الشات مباشرة إذا كان المتصفح مفتوحاً
                    client.postMessage({ type: 'FOCUS_CHAT' });
                    return;
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(event.notification.data.url);
            }
        })
    );
});
