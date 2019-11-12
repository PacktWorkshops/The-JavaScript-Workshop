// Version 2 of our DB
let request = window.indexedDB.open('animals', 2);

// handle the upgradeneeded event
request.onupgradeneeded = event=>{
    let db = event.target.result;
    // Our new cephalopods store
    db.createObjectStore('cephalopods', {
        keyPath: 'species'
    });
}

request.onsuccess = event=>{
    let db = event.target.result;
    db.onerror = error=>{
        console.log(error)
    }

    let transaction = db.transaction('cephalopods', 'readwrite');
    let store = transaction.objectStore('cephalopods');
    store.put({
        species: 'Blue Ringed Octopus',
        traits: ['Squishy', 'Super venomous']
    });

    store.put({
        species: 'Sepioteuthissepioidea',
        commonName: "'Caribbean Reef Squid'",
        traits: ['Squishy', 'Expert at camouflage']
    });
    transaction.oncomplete = ()=>{
        db.close();
    }
}
