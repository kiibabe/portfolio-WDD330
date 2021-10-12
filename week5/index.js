import HikesController from './hikesController.js';
const myHikesController = new HikesController('hikes');
// show the array on load
window.addEventListener('load', function() {
    myHikesController.showHikeList();
});