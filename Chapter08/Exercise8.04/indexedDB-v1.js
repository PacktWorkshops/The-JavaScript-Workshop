let request = window.indexedDB.open('animals', 1);
request.onupgradeneeded = event=>{
    // handle the upgradeneeded event
    let db = event.target.result;
    db.createObjectStore('mammals', {
        keyPath: 'species'
    });
}
request.onsuccess = event=>{
    let db = event.target.result;
    db.onerror = error=>{
        console.log(error);
    }
    let transaction = db.transaction('mammals', 'readwrite');
    let store = transaction.objectStore('mammals');
    store.put({
        species: "Canis lupus",
        commonName: "Wolf",
        traits: ["Furry", "Likes to howl at moon"]
    });
    store.put({
        species: "Nycticebuscoucang",
        commonName: "Slow Loris",
        traits: ["Furry", "Every day is Sunday"]
    });
    transaction.oncomplete = ()=>{
        db.close();
    }
}
