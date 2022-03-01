const solves = require("./solves");

const app = () => {
    try {
        Object.values(solves).map(fn => {
            if (typeof fn === "function") {
                fn.call();
            }
        })
    } catch (ex) {
        console.log(ex);
    }
};

app();