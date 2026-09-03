// استيراد سكربتات Firebase الخاصة بـ Service Worker
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js');

// تهيئة Firebase داخل Service Worker باستخدام نفس الإعدادات الموجودة في صفحتك
firebase.initializeApp({
    apiKey: "AIzaSyCVZQ3DTRr_7c5q3CmPRzt3ai1KX80F0C0",
    authDomain: "marry-55604.firebaseapp.com",
    databaseURL: "https://marry-55604-default-rtdb.firebaseio.com",
    projectId: "marry-55604",
    storageBucket: "marry-55604.firebasestorage.app",
    messagingSenderId: "524067560260",
    appId: "1:524067560260:web:adc87a02eadf098d5a5511",
    measurementId: "G-0QW3CXTSM3"
});

const messaging = firebase.messaging();

// التعامل مع الإشعارات الخلفية (Background Messages) عندما تكون الصفحة مغلقة أو في الخلفية
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification?.title || 'الهواري للتعارف والزواج';
    const notificationOptions = {
        body: payload.notification?.body || 'لديك رسالة جديدة',
        icon: './22.jpg',
        badge: './22.jpg',
        vibrate: [300, 100, 300, 100, 300],
        tag: 'hawary-chat-msg',
        renotify: true,
        data: {
            url: payload.notification?.click_action || self.location.origin
        }
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// التعامل مع الضغط على الإشعار لفتح الموقع أو إعادة التركيز عليه
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const targetUrl = event.notification.data?.url || self.location.origin;

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if (client.url.includes('clint.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
