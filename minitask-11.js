// promise
const showName = (username, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(username);
            resolve();
    }, time);
  });
};

// then-catch
showName("John", 1500)
    .then(() => showName("Ed", 2000))
    .then(() => showName("Jane", 500))
    .catch((err) => {
        console.log (err)
    });

// try-catch
(async () => {
    try {
        await showName("John", 1500);
        await showName("Ed", 2000);
        await showName("Jane", 500);
    } catch (err) {
        console.log("Error:", err);
    }
})();
