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
    console.log("created:", data);
    return state.concat(data);
  }
  if (action == "REMOVE") {
   let data = modelFindIndex(todos, ev.detail);
    if (i > -1) {
      state = state.splice(i, 1);
      console.log("removed", data);
      return state
    }
  }
  if (action == "MODIFY") {
    let data = modelFindIndex(todos, ev.detail);
    if (i > -1) {
      state = state.splice(i, 1);
      console.log("modified", data);
      return state
    }
  }
}