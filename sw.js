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

// استقبال الإشعارات في الخلفية التامة (حتى لو المتصفح مغلق)[cite: 6]
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification?.title || 'رسالة جديدة - الهواري للزواج';[cite: 6]
    const notificationOptions = {
        body: payload.notification?.body || 'لديك رسالة جديدة في الشات',[cite: 6]
        icon: './22.jpg',[cite: 6]
        badge: './22.jpg',[cite: 6]
        vibrate: [300, 100, 300, 100, 300],[cite: 6]
        data: { url: payload.data?.url || './clint_2.html' }[cite: 6]
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const targetUrl = event.notification.data?.url || './clint_2.html';[cite: 6]
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if (client.url.includes('clint_2.html') && 'focus' in client) {[cite: 6]
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
