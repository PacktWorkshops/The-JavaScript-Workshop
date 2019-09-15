let request = window.indexedDB.open('animals', 2); // Version 2 of our DB

request.onupgradeneeded = event => {
  // handle the upgradeneeded event
  let db = event.target.result;
  db.createObjectStore('cephalopods', {
    // Our new cephalopods store
    keyPath: 'species',
  });
};

request.onsuccess = event => {
  let db = event.target.result;
  db.onerror = error => {
    console.log(error);
  };

  let trx = db.transaction('cephalopods', 'readwrite');
  let store = trx.objectStore('cephalopods');
  store.put({
    species: 'Blue Ringed Octopus',
    traits: ['Squishy', 'Super venomous'],
  });

  store.put({
    species: 'Sepioteuthis sepioidea',
    commonName: 'Caribbean Reef Squid',
    traits: ['Squishy', 'Expert at camouflage'],
  });
  trx.oncomplete = () => {
    db.close();
  };
};
