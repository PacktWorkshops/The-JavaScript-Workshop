let request = window.indexedDB.open('animals', 3); // version 3 of the DB

request.onupgradeneeded = event => {
  let store = event.target.transaction.objectStore('mammals');
  store.createIndex('traits', 'traits', { multiEntry: true, unique: false });
};

request.onsuccess = event => {
  let db = event.target.result;
  let trx = db.transaction('mammals', 'readonly');
  let store = trx.objectStore('mammals');
  let index = store.index('traits');
  let animalReq = index.getAll('Furry');

  animalReq.onsuccess = event => {
    console.log(event.target.result);
  };

  animalReq.onerror = error => {
    console.log(error); // handle any error
  };
};
