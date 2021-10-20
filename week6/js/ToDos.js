import localStorageHelper from './ls.js';
import Utilities from './utilities.js';

export default class ToDos {
    constructor(name = "todo") {
        this.ls = new localStorageHelper();
        let templist = this.ls.load(this.name);
        this.list = [];
        templist?.forEach(x => {
            this.list.push(new Utilities(x.content, x.id, x.completed));
        })
        this.name = name;
        this.renderList();
    }
    addTask(content) {
        let task = new Utilities(content = content);
        this.list.push(task);
        document.getElementById("list").appendChild(task.createElement(this.save.bind(this), this.removeTask.bind(this)));
        this.save();
    }
    removeTask(task) {
        const index = this.list.indexOf(task);
        if (index > -1) {
            this.list.splice(index, 1);
        }
        this.renderList();
        this.save();
    }
    save() {
        this.ls.writeToLS(this.name, JSON.stringify(this.list));
        this.updateTotal();
    }
    numUncompleted() {
        let count = 0;
        this.list.forEach(x => count += x.completed ? 0 : 1);
        return count;
    }
    numCompleted() {
        let count = 0;
        this.list.forEach(x => count += !x.completed ? 0 : 1);
        return count;
    }
    renderList(filters = ""){
        let container = document.getElementById("list");
        container.textContent = "";
        let numActive = this.numUncompleted()
        if (this.list) {
            this.list.forEach(x => {
                switch (filters) {
                    case "ACTIVE":
                        if (!x.completed) container.appendChild(x.createElement(this.save.bind(this), this.removeTask.bind(this)));
                        document.getElementById("total").innerHTML = `${numActive} task${numActive > 1 ? 's' : ""} left`;
                        break;
                    case "COMPLETED":
                        if (x.completed) container.appendChild(x.createElement(this.save.bind(this), this.removeTask.bind(this)));
                        let numCompleted = this.numCompleted();
                        document.getElementById("total").innerHTML = `${numCompleted} task${numCompleted > 1 ? 's' : ""} completed`;
                        break;
                    default:
                        container.appendChild(x.createElement(this.save.bind(this), this.removeTask.bind(this)));
                        document.getElementById("total").innerHTML = `${numActive} task${numActive > 1 ? 's' : ""} left`;
                        break;
                }
            });
        }
    }
    updateTotal() {
        let total = this.numUncompleted();
        if (document.getElementById("all").checked == true){
            document.getElementById("total").innerHTML = `${total} task${total > 1 ? 's' : ""} left`;
        } else if (document.getElementById("active").checked == true) {
            document.getElementById("total").innerHTML = `${total} task${total > 1 ? 's' : ""} left`;
        } else if (document.getElementById("completed").checked == true){
            total = this.numCompleted();
            document.getElementById("total").innerHTML = `${total} task${total > 1 ? 's' : ""} completed`;
        } else {
            document.getElementById("total").innerHTML = `${total} task${total > 1 ? 's' : ""} left`;
        }
    }
}