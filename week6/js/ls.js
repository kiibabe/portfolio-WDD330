export default class localStorageHelper {
    constructor(storage = window.localStorage) {
        this.storage = storage;
    }
    load(key) {
        return this.storage.getItem(key);
    }
    writeToLS(key, data) {
        this.storage.setItem(key, data);
    }
}