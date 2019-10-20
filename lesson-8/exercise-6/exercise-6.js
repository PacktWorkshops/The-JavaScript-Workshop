const http = new XMLHttpRequest();
http.open('GET', 'https://jsonplaceholder.typicode.com/todos');
http.send();

http.onload = event => {
  let todos = JSON.parse(event.target.responseText);
  let dbRequest = window.indexedDB.open('tasks', 1);
  dbRequest.onupgradeneeded = event => {
    // handle the upgradeneeded event
    let db = event.target.result;
    db.createObjectStore('todos', {
      keyPath: 'id',
    });
  };
  dbRequest.onsuccess = event => {
    let db = event.target.result;
    let trx = db.transaction('todos', 'readwrite');
    let store = trx.objectStore('todos');
    todos.forEach(item => {
      store.put(item);
    });
    trx.oncomplete = () => {
      console.log('close');
      db.close();
    };
  };
};
