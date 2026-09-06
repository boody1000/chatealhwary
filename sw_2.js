// Service Worker لصفحة الموظف (employee.html)
// المهمة: (1) إظهار إشعارات عادية وقت ما الصفحة شغالة عن طريق postMessage (زي القديم بالظبط)
//         (2) تشغيل OneSignal عشان يقدر يبعت Push Notifications حتى لو التطبيق مقفول تمامًا (مجانًا)

importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// إشعار عادي بييجي من الصفحة نفسها وهي شغالة
self.addEventListener('message', (event) => {
    if (!event.data) return;

    if (event.data.type === 'SHOW_NOTIFICATION') {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: './22.jpg',
            badge: './22.jpg',
            vibrate: [300, 100, 300, 100, 300],
            tag: event.data.tag || 'message',
            requireInteraction: !!event.data.requireInteraction,
            renotify: true,
            data: { url: event.data.url }
        });
    }

    if (event.data.type === 'CLOSE_NOTIFICATION') {
        self.registration.getNotifications({ tag: event.data.tag }).then((notifications) => {
            notifications.forEach((n) => n.close());
        });
    }
});

// لما المستخدم يدوس على إشعار من النوع القديم (postMessage) - يفتح الصفحة أو يركّز عليها لو مفتوحة أصلاً
// (إشعارات OneSignal ليها التصرف بتاعها المدمج جوه الملف اللي استوردناه فوق)
self.addEventListener('notificationclick', (event) => {
    if (!event.notification.data || !event.notification.data.url) return; // سيبها لـ OneSignal لو مش من عندنا
    event.notification.close();
    const targetUrl = event.notification.data.url;
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if ('focus' in client) return client.focus();
            }
            if (clients.openWindow) return clients.openWindow(targetUrl);
        })
    );
});
