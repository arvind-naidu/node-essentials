var logger = function(message) {
    console.log("MESSAGE", message);
}

logger("message");

function output(message, func) {
    func(message);
}

output("a second message", logger);