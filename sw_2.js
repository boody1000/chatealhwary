// استقبال أمر إظهار إشعار المكالمة مع أزرار الرد والرفض
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_CALL_NOTIFICATION') {
        const title = event.data.title || 'مكالمة صوتية واردة';[cite: 3]
        const options = {
            body: event.data.body || 'لديك مكالمة واردة، اضغط للرد',[cite: 3]
            icon: './22.jpg',[cite: 3]
            badge: './22.jpg',[cite: 3]
            vibrate: [300, 100, 300, 100, 300, 100, 300],[cite: 3]
            tag: 'incoming-call-alert',[cite: 3]
            renotify: true,[cite: 3]
            requireInteraction: true, // يظل الإشعار ظاهراً حتى يتفاعل معه المستخدم مثل الماسنجر[cite: 3]
            actions: [
                { action: 'answer_call', title: '📞 رد' },
                { action: 'reject_call', title: '❌ رفض' }
            ],
            data: { url: event.data.url || self.location.origin }[cite: 3]
        };

        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
});

// التعامل مع الضغط على أزرار الإشعار
self.addEventListener('notificationclick', (event) => {
    const action = event.action;
    const targetUrl = event.notification.data.url || './clint_2.html';[cite: 3]
    
    event.notification.close();

    if (action === 'answer_call') {
        // إذا ضغط المستخدم على زر الرد من الإشعار
        event.waitUntil(
            clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
                for (let i = 0; i < clientList.length; i++) {
                    let client = clientList[i];
                    if ('focus' in client) {
                        client.focus();
                        // إرسال إشارة للصفحة لفتح شاشة الرد فوراً
                        client.postMessage({ type: 'TRIGGER_ANSWER_CALL' });
                        return;
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow(targetUrl + '?action=answer');
                }
            })
        );
    } else if (action === 'reject_call') {
        // إذا ضغط على رفض المكالمة من الإشعار
        event.waitUntil(
            clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
                for (let i = 0; i < clientList.length; i++) {
                    let client = clientList[i];
                    if ('focus' in client) {
                        client.postMessage({ type: 'TRIGGER_REJECT_CALL' });
                        return;
                    }
                }
            })
        );
    } else {
        // الضغط العادي على الإشعار نفسه
        event.waitUntil(
            clients.openWindow(targetUrl)[cite: 3]
        );
    }
});
