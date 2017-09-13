class LocalStorageService {
    constructor() {
        this.localstorage = window.localStorage;
        this.table = 'TODO';
    }

    getItems() {
        return JSON.parse(this.localstorage.getItem(this.table)) || [];
    }

    setItems(data) {
        this.localstorage.setItem(this.table,JSON.stringify(data));
    }

    getItem(id) {
        let tasks = this.getItems();
        return tasks.find(x => x.id === id);
    }

    addItem(task) {
        let tasks = this.getItems();
        tasks.push({
            'id': new Date().getTime(),
            'title': task,
            'completed': false
        });
        return tasks;
    }

    updateItem(task) {
        let tasks = this.getItems();
        let idx = tasks.findIndex(x => x.id === task.id);
        tasks[idx].completed = task.completed;
        tasks[idx].title = task.title;
        return tasks;
    }

    removeItem(id) {
        let tasks = this.getItems();
        let idx = tasks.findIndex(x => x.id === id);
        tasks.splice(idx,1);
        return tasks;
    }
}

export default LocalStorageService;