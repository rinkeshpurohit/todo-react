class LocalStorageService {
    constructor() {
        this.localstorage = window.localStorage;
        this.table = 'TODO';
    }

    getItem() {
        return JSON.parse(this.localstorage.getItem(this.table));
    }

    setItem(data) {
        this.localstorage.setItem(this.table,JSON.stringify(data));
    }
}

export default LocalStorageService;