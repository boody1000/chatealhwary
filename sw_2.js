self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// استقبال طلبات الإشعار من التطبيق وعرضها بشكل نظامي
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body, url } = event.data;
    
    const options = {
      body: body,
      icon: '22.jpg',
      badge: '22.jpg',
      vibrate: [300, 150, 300, 150, 300],
      tag: 'universal-alert',
      renotify: true,
      requireInteraction: true, // يظل الإشعار ظاهراً على الشاشة حتى يتفاعل معه الموظف
      data: { url: url || self.location.origin }
    };

    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  }
});

// فتح لوحة التحكم عند الضغط على الإشعار
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (let client of windowClients) {
        if (client.url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url);
      }
    })
  );
});
