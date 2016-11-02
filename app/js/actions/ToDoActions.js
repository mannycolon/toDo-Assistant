import dispatcher from "../dispatcher";


class ToDosActions {
  createTodo(text) {
    dispatcher.dispatch({
      type: "CREATE_TODO",
      text,
    });
  }

  deleteTodo(id) {
    dispatcher.dispatch({
      type: "DELETE_TODO",
      id,
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
          text: "Go Shopping Again",
          complete: false
        },
        {
          id: 6262627272,
          text: "Hug Wife",
          complete: true
        },
      ]});
    }, 1000);
  }

}

const TodoActions = new ToDosActions();
module.exports = TodoActions;
