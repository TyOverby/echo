for (var i = 0; i < 100; i++) {
    var myWorker = new Worker("task.js");
    myWorker.onmessage = function(m) {
        console.log("message: " + m.data);
    };
}
