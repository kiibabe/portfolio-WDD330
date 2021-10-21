import ToDos from "./ToDos.js";

class Todo {
    constructor() {
        this.todoList = new ToDos();
        document.getElementById("all").addEventListener("change", this.filterAll.bind(this));
        document.getElementById("active").addEventListener("change", this.filterActive.bind(this));
        document.getElementById("completed").addEventListener("change", this.filterCompleted.bind(this));
        document.getElementById("add").addEventListener("click", this.addTask.bind(this));
    }
    
    addTask() {
        let input = document.getElementById("new-task");
        this.todoList.addTask(input.value);
        input.value = "";
        if (document.getElementById('all').checked == true){
            this.filterAll();
        } else if (document.getElementById('active').checked == true) {
            this.filterActive();
        } else if (document.getElementById('completed').checked == true){
            this.filterCompleted();
        }
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
