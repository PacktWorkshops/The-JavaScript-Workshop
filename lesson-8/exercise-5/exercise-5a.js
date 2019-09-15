let request = window.indexedDB.open('animals', 3);
request.onsuccess = event => {
  let db = event.target.result;
  let trx = db.transaction('mammals', 'readonly');
  let store = trx.objectStore('mammals');
  let cursorReq = store.openCursor();
  cursorReq.onsuccess = e => {
    let cursor = e.target.result;
    if (cursor) {
      console.log(cursor.value); // do something with this entry.
      cursor.continue();
    } else {
      console.log('end of entries');
    }
  };
};
