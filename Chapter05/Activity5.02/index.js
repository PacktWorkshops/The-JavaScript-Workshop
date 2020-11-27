let todos = [];

function modelFindIndex(state, id) {
  for (let i=0; i<state.length; i++) {
    if (state[i].id == id) {
      return i;
    }
  }
  return -1;
}

function modelStateChange(state, action, data) {
  if (action == "CREATE") {
    data['createdAt'] = new Date();
       data['updatedAt'] = new Date();
       data['completed'] = false;
       console.log("created:", data);
    return state.concat(data);
  }
  if (action == "REMOVE") {
   let item = modelFindIndex(state, data.id);
       if (item > -1) {
          console.log("removed", state[item]);
          delete state[item];
          return state
       }
    }
  if (action == "MODIFY") {
    let item = modelFindIndex(state, data.id);
    let modifyItem = state.splice(item, 1);
    modifyItem[0]['updatedAt'] = new Date();
    modifyItem[0]['completed'] = data.completed;
    console.log("modified item", modifyItem[0]);
    state[item]= modifyItem[0];
    console.log("complete array:", state);
    return state
  }
}

// call CREATE Method

// todos = modelStateChange(todos, "CREATE", { id: 1, title: "Learn JS", description: "I will learn JS from Packtpub.com" } );

// todos = modelStateChange(todos, "CREATE", { id: 2, title: "Learn Event", description: "I will learn JS Event from Packtpub.com" } );

//call Modify Method

// todos = modelStateChange(todos, "MODIFY", { id: 2, completed: true } );

//call REMOVE Method

// todos = modelStateChange(todos, "REMOVE", { id :"1"} );
