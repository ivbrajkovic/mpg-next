pausecompAsync(millis) {
    return new Promise((resolve, reject) => {
        // var date = new Date();
        // var curDate = null;
        // do {
        //     curDate = new Date();
        // } while (curDate - date < millis);
        // resolve("ok");
        console.log('TCL: pausecompAsync -> timer: START');
        setTimeout(function() {
            resolve('Success!'); // Yay! Everything went well!
        }, millis);
        console.log('TCL: pausecompAsync -> timer: STOP');
    });
}