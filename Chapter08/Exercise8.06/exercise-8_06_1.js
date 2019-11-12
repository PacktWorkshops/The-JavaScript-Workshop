let dbRequest = window.indexedDB.open('tasks', 1);
let outstandingTodos = [];
dbRequest.onsuccess = event => {
  let db = event.target.result;
  let trx = db.transaction('todos', 'readonly');
  let store = trx.objectStore('todos');
  let cursorReq = store.openCursor();
  cursorReq.onsuccess = e => {
    let cursor = e.target.result;
    if (cursor) {
      console.log(cursor.value)
      if (!cursor.value.completed) {
        outstandingTodos.push(cursor.value);
      }
      cursor.continue();
    } else {
      console.log('end of entries');
      console.log(outstandingTodos);
    };
  };
};
