// Служебный файл для уведомлений. Положите рядом с index.html (в корень сайта) и не переименовывайте.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyCu0Gdjotnn-xufUt8YTrmX3jCquJ9U6t8',
  projectId: 'hearts-game-9f6f8',
  messagingSenderId: '414873465415',
  appId: 'В1:414873465415:web:b4e27196a0ba1447dc7762'
});
firebase.messaging();
