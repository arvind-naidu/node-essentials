// var pi = 3.14

// console.log("Setting up the circle module.");

module.exports = {
    area: function(radius) {
        return radius * radius * Math.PI;
    },

    circumference: function(radius) {
        return 2* radius * Math.PI;
    }
};


/* exports.area = function(radius) {
    return radius * radius * Math.PI;
}; */

/* exports.circumference = function(radius) {
    return 2 * radius * Math.PI;
}; */

// exports.area = area;
// exports.circumference = circumference;