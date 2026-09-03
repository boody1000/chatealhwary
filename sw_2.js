// Service Worker المحدث لضمان بقاء إشعارات المكالمات في الشريط وعدم اختفائها

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('message', (event) => {
    if (event.data) {
        if (event.data.type === 'SHOW_NOTIFICATION') {
            const title = event.data.title || 'رسالة جديدة - شركة الهواري للزواج';
            const options = {
                body: event.data.body || 'لديك رسالة جديدة في الشات',
                icon: './22.jpg',
                badge: './22.jpg',
                vibrate: [300, 100, 300, 100, 300],
                tag: 'hawary-chat-' + Date.now(), // تگ متجدد لمنع التداخل
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
            // إشعار مكالمة واردة بـ Tag فريد لضمان عدم اختفائه من الشريط
            const title = event.data.title || '📞 مكالمة صوتية واردة...';
            const options = {
                body: event.data.body || 'شركة الهواري للزواج - اضغط للرد أو الرفض',
                icon: './22.jpg',
                badge: './22.jpg',
                vibrate: [500, 200, 500, 200, 500, 200, 500, 200],
                tag: 'incoming-call-' + Date.now(), // يضمن بقاء كل مكالمة وعدم مسحها تلقائياً
                renotify: true,
                requireInteraction: true, // اجبار الإشعار على البقاء ظاهراً في الشريط حتى يتفاعل المستخدم
                dir: 'rtl',
                lang: 'ar',
                actions: [
                    { action: 'answer_call', title: '📞 رد على المكالمة' },
                    { action: 'reject_call', title: '❌ إنهاء / رفض' }
                ],
                data: { url: event.data.url || self.location.origin, type: 'call' }
            };

            event.waitUntil(
                self.registration.showNotification(title, options)
            );
        }
    }
});

// التعامل مع أزرار الرد والرفض
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
