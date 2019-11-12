let request = window.indexedDB.open('animals', 1);

request.onsuccess = event=>{
    let db = event.target.result;
    db.onerror = error=>{
        // handle an error
        console.log(error);
    }
    let trx = db.transaction('mammals', 'readonly');
    let store = trx.objectStore('mammals');
    let animalReq = store.get('Nycticebuscoucang');
    animalReq.onsuccess = (event)=>{
        console.log(event.target.result);
    }

    animalReq.onerror = (error)=>{
        // handle any error
        console.log(error);
    }
}
