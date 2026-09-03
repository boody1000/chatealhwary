// Service Worker المتكامل لإدارة الإشعارات في الخلفية - شركة الهواري للزواج[cite: 3]

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// استقبال أمر إظهار الإشعار من صفحة الشات الرئيسية أو المكالمات[cite: 3]
self.addEventListener('message', (event) => {
    if (event.data) {
        if (event.data.type === 'SHOW_NOTIFICATION') {
            const title = event.data.title || 'رسالة جديدة - شركة الهواري للزواج';[cite: 3]
            const options = {
                body: event.data.body || 'لديك رسالة جديدة في الشات',[cite: 3]
                icon: './22.jpg',[cite: 3]
                badge: './22.jpg',[cite: 3]
                vibrate: [300, 100, 300, 100, 300],[cite: 3]
                tag: 'hawary-chat-msg',[cite: 3]
                renotify: true,[cite: 3]
                requireInteraction: false,[cite: 3]
                actions: [
                    { action: 'open', title: 'فتح المحادثة' }[cite: 3]
                ],
                data: { url: event.data.url || self.location.origin }[cite: 3]
            };

            event.waitUntil(
                self.registration.showNotification(title, options)
            );
        } else if (event.data.type === 'SHOW_CALL_NOTIFICATION') {
            // إشعار المكالمة الواردة مع أزرار الرد والرفض كلوحة اتصال مصغرة
            const title = event.data.title || '📞 مكالمة صوتية واردة';[cite: 3]
            const options = {
                body: event.data.body || 'لديك مكالمة واردة الآن...',[cite: 3]
                icon: './22.jpg',[cite: 3]
                badge: './22.jpg',[cite: 3]
                vibrate: [300, 150, 300, 150, 300, 150, 300],[cite: 3]
                tag: 'incoming-call',[cite: 3]
                renotify: true,[cite: 3]
                requireInteraction: true, // يظل الإشعار ظاهراً وثابتاً حتى يتفاعل معه المستخدم
                actions: [
                    { action: 'answer_call', title: '📞 رد' },
                    { action: 'reject_call', title: '❌ إغلاق / رفض' }
                ],
                data: { url: event.data.url || self.location.origin }[cite: 3]
            };

            event.waitUntil(
                self.registration.showNotification(title, options)
            );
        }
    }
});

// عند الضغط على الإشعار أو أزرار (رد / رفض)
self.addEventListener('notificationclick', (event) => {
    const action = event.action;
    event.notification.close();
    
    const targetUrl = event.notification.data.url || './clint_2.html';[cite: 3]

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if ('focus' in client) {
                    client.focus();
                    if (action === 'answer_call') {
                        client.postMessage({ type: 'TRIGGER_ANSWER_CALL' });
                    } else if (action === 'reject_call') {
                        client.postMessage({ type: 'TRIGGER_REJECT_CALL' });
                    }
                    return;
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);[cite: 3]
            }
        })
    );
});
