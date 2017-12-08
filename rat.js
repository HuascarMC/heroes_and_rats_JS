const Rat = function() {
}

Rat.prototype.touch = function(food) {
 food.setSafety(true);
}

module.exports = Rat;
