let request = window.indexedDB.open('animals', 1);
request.onupgradeneeded = event => { // handle the upgradeneeded event
  let db = event.target.result;
  db.createObjectStore('mammals', {
      keyPath: 'species'
  });
};

request.onsuccess = event => {
  let db = event.target.result;

  db.onerror = error => {
    console.log(error);
  };

  let trx = db.transaction('mammals', 'readwrite');
  let store = trx.objectStore('mammals');

  store.put({
    species: "Canis lupus",
    commonName: "Wolf",
    traits: ["Furry", "Likes to howl at moon"]
  });

  store.put({
    species: "Nycticebus coucang",
    commonName: "Slow Loris",
    traits: ["Furry", "Every day is Sunday"]
  });
  let store = trx.objectStore('mammals');

  trx.oncomplete = () => {
    db.close();
  };
};

let request = window.indexedDB.open('animals', 1);


request.onsuccess = event => {
  let db = event.target.result;
  db.onerror = error => {
    console.log(error); // handle an error
  }
  let trx = db.transaction('mammals', 'readonly');
  let store = trx.objectStore('mammals');
  let animalReq = store.get("Nycticebus coucang");
  animalReq.onsuccess = (event) => {
    console.log(event.target.result);
  };
  animalReq.onerror = (error) => {
    console.log(error); // handle any error
  }
};
