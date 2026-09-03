// استيراد مكتبات Firebase متوافقة مع Service Worker
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

// استقبال الإشعارات في الخلفية التامة (حتى لو المتصفح مغلق)
messaging.onBackgroundMessage((payload) => {
    // استقبال البيانات المرسلة من السيرفر أو الفايربيس
    const notificationTitle = payload.notification?.title || payload.data?.title || 'شركة الهواري للزواج';
    const notificationBody = payload.notification?.body || payload.data?.body || 'لديك رسالة جديدة في الشات';
    const senderImage = payload.notification?.image || payload.data?.image || './22.jpg';
    const targetUrl = payload.data?.url || './clint_2.html';

    const notificationOptions = {
        body: notificationBody,
        icon: './22.jpg',        // أيقونة الموقع الصغيرة التي تظهر بجانب الإشعار
        image: senderImage,      // الصورة الكبيرة داخل الإشعار (إن وجدت)
        badge: './22.jpg',       // الأيقونة المصغرة لشريط الحالة (Status Bar)
        dir: 'rtl',              // اتجاه النص من اليمين لليسار للعربية
        vibrate: [300, 100, 300, 100, 300], // نبضات الاهتزاز للموبايل
        tag: 'hawary-chat-notification', // لمنع تكرار الإشعارات وتحديث رسائل الشات فوق بعضها
        renotify: true,          // تكرار الصوت والإهتزاز حتى لو كان هناك إشعار سابق
        requireInteraction: false, 
        data: { url: targetUrl }
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// عند الضغط على الإشعار يتم فتح صفحة الشات مباشرة
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const targetUrl = event.notification.data?.url || './clint_2.html';
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if (client.url.includes('clint_2.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
```[cite: 1]

---

### شروط هامة جداً لضمان ظهور الإشعار بهذا الشكل على الموبايل:

1. **طريقة الإرسال من سيرفر PHP:**
   تأكد أن السيرفر لديك عند إرسال الإشعار يقوم بإرسال الحقول (`title` و `body`) داخل كائن الـ `notification` أو الـ `data` بشكل صحيح[cite: 1]، مثلاً عبر استدعاء واجهة Firebase FCM HTTP v1 API بهذا الشكل:
   ```json
   {
     "message": {
       "token": "USER_FCM_TOKEN",
       "notification": {
         "title": "اسم المرسل (أو رسالة جديدة)",
         "body": "محتوى النص الذي كتبه المستخدم في الشات..."
       },
       "data": {
         "url": "./clint_2.html"
       }
     }
   }
