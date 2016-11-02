import dispatcher from "../dispatcher";

class ToDosActions {
  createTodo(task) {
    dispatcher.dispatch({
      type: "CREATE_TODO",
      task,
    });
  }

  deleteTodo(id) {
    dispatcher.dispatch({
      type: "DELETE_TODO",
      id,
    });
  }

  completeTodo(id) {
    dispatcher.dispatch({
      type: "COMPLETE_TODO",
      id,
    });
  }

  editTodo(oldTask, newTask) {
    dispatcher.dispatch({
      type: "EDIT_TODO",
      oldTask,
      newTask
    });
  }

  reloadTodos() {
    // axios("http://someurl.com/somedataendpoint").then((data) => {
    //   console.log("got the data!", data);
    // })
    dispatcher.dispatch({type: "FETCH_TODOS"});
    setTimeout(() => {
      dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
        {
          id: 8484848484,
          task: "Go Shopping Again",
          isDone: false
        },
        {
          id: 6262627272,
          task: "Hug Wife",
          isDone: true
        },
      ]});
    }, 1000);
  }

}

const TodoActions = new ToDosActions();
module.exports = TodoActions;
