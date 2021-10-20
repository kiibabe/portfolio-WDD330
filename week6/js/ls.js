export default class localStorageHelper {
    load(key) {
        const stored = localStorage.getItem(key);
        return stored == null ? undefined : JSON.parse(stored);
    }
    writeToLS(key, data) {
        localStorage.setItem(key, data);
    }
}