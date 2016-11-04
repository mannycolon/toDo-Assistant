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

  createNewUsername(username){
    dispatcher.dispatch({
      type: "CREATE_NEWUSER",
      username,
    });
  }

  createNewToDoBook(newToDoBook){
    dispatcher.dispatch({
      type: "CREATE_NEW_TODOBOOK",
      newToDoBook,
    });
  }

  deleteToDoBook(ToDoBookToDelete){
    dispatcher.dispatch({
      type: "DELETE_TODOBOOK",
      ToDoBookToDelete,
    });
  }

  setModalVisibility(visibility){
    dispatcher.dispatch({
      type: "MODAL_VISIBILITY",
      visibility,
    });
  }

}

const TodoActions = new ToDosActions();
module.exports = TodoActions;
