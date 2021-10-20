import ToDos from "/js/ToDos.js";

class Todo {
    constructor() {
        this.todoList = new ToDos();
        document.getElementById('new-task').addEventListener("keyup", (event) => (event.key == 'Enter') ? this.addTask() : "")
        document.getElementById('all').addEventListener('change', this.filterAll.bind(this));
        document.getElementById('active').addEventListener('change', this.filterActive.bind(this));
        document.getElementById('completed').addEventListener('change', this.filterCompleted.bind(this));
        document.getElementById('add').addEventListener('click', this.addTask.bind(this));
    }
    
    addTask() {
        let txtbox = document.getElementById('new-task');
        this.todoList.addTask(txtbox.value);
        txtbox.value = "";
    }
    
    filterAll() {
        this.todoList.renderList();
    }
    filterActive() {
        this.todoList.renderList("ACTIVE");
    }
    filterCompleted() {
        this.todoList.renderList("COMPLETED");
    }
}
let todo = new Todo();
