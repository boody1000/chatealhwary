// استيراد مكتبات Firebase متوافقة مع Service Worker[cite: 6]
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCVZQ3DTRr_7c5q3CmPRzt3ai1KX80F0C0",
    authDomain: "marry-55604.firebaseapp.com",
    databaseURL: "https://marry-55604-default-rtdb.firebaseio.com",
    projectId: "marry-55604",
    storageBucket: "marry-55604.firebasestorage.app",
    messagingSenderId: "524067560260",
    appId: "1:524067560260:web:adc87a02eadf098d5a5511"
});

const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية التامة مع أزرار المكالمات[cite: 6]
messaging.onBackgroundMessage((payload) => {
    const isCall = payload.data?.type === 'call' || payload.notification?.title?.includes('مكالمة');
    
    const notificationTitle = payload.notification?.title || (isCall ? '📞 مكالمة صوتية واردة' : 'رسالة جديدة - الهواري للزواج');[cite: 6]
    const notificationOptions = {
        body: payload.notification?.body || (isCall ? 'لديك مكالمة واردة الآن...' : 'لديك رسالة جديدة في الشات'),[cite: 6]
        icon: './22.jpg',[cite: 6]
        badge: './22.jpg',[cite: 6]
        vibrate: [300, 150, 300, 150, 300, 150, 300],[cite: 6]
        requireInteraction: true,
        actions: [
            { action: 'answer_call', title: '📞 رد' },
            { action: 'reject_call', title: '❌ إغلاق / رفض' }
        ],
        data: { url: payload.data?.url || './clint_2.html' }[cite: 6]
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// التعامل مع النقر على الإشعار أو أزرار التفاعل (الرد / الرفض)
self.addEventListener('notificationclick', (event) => {
    const action = event.action;
    event.notification.close();
    const targetUrl = event.notification.data?.url || './clint_2.html';[cite: 6]

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
                return clients.openWindow(targetUrl);[cite: 6]
            }
        })
    );
});
