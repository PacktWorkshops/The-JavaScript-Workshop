var todos = [];
var todo = {
  id: null,
  title: "",
  description: "",
  createAt: "",
  updateAt: "",
  completed: false,
};

var deltedTodoItems = [];

// function indexMatch(elm) {
//   return (elm) => elm.id == data.id;
// }

function modelStateChange(state, action, data) {
  var targetIndex = todos.findIndex((elm) => {
    return elm.id == data.id;
  });
  switch (action.toLowerCase()) {
    case "remove":
      deltedTodoItems.push(todos[targetIndex]);
      todos.splice(targetIndex, 1);
      break;
    case "modify":
      data.updateAt=new Date();
      Object.assign(todos[targetIndex], data);
      break;
    case "create":
      var newTodo = Object.create(todo);
      //Object.assign(newTodo, data);
      newTodo = { ...data };
      newTodo.createAt = new Date();
      state.push(newTodo);
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
}

modelStateChange(todos, "CREATE", {
  id: 1,
  title: "Learn JS",
  description: "I will learn JS from Packtpub.com",
});

modelStateChange(todos, "CREATE", {
  id: 2,
  title: "Learn Event",
  description: "I will learn JS Event from Packtpub.com",
});


/*********************/
console.log("todo list before action\n", todos);
modelStateChange(todos, "MODIFY", { id: 2, completed: true });
console.log("todo list after modifying \n", todos);
modelStateChange(todos, "remove", { id: 1 });
console.log("todo list after deleting \n", todos);
console.log("deleted todos\n", deltedTodoItems);
