// Service Worker المتكامل لإدارة الإشعارات في الخلفية - شركة الهواري للزواج

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// استقبال أمر إظهار الإشعار من صفحة الشات أو المكالمات
self.addEventListener('message', (event) => {
    if (event.data) {
        if (event.data.type === 'SHOW_NOTIFICATION') {
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
        } else if (event.data.type === 'SHOW_CALL_NOTIFICATION') {
            // إشعار المكالمة الواردة مع أزرار الرد والرفض كلوحة اتصال مصغرة
            const title = event.data.title || '📞 مكالمة صوتية واردة';
            const options = {
                body: event.data.body || 'لديك مكالمة واردة الآن...',
                icon: './22.jpg',
                badge: './22.jpg',
                vibrate: [300, 150, 300, 150, 300, 150, 300],
                tag: 'incoming-call',
                renotify: true,
                requireInteraction: true, // يبقى ثابتاً حتى يتفاعل المستخدم
                actions: [
                    { action: 'answer_call', title: '📞 رد' },
                    { action: 'reject_call', title: '❌ إغلاق / رفض' }
                ],
                data: { url: event.data.url || self.location.origin }
            };

            event.waitUntil(
                self.registration.showNotification(title, options)
            );
        }
    }
});

// عند الضغط على الإشعار أو أزرار التفاعل (رد / رفض)
self.addEventListener('notificationclick', (event) => {
    const action = event.action;
    event.notification.close();
    
    const targetUrl = event.notification.data.url || './clint_2.html';

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
                return clients.openWindow(targetUrl);
            }
        })
    );
});
