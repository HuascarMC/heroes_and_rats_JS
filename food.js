const Food = function(name, replenishment) {
 this.name = name;
 this.replenishment = replenishment;
 this.safe = false;
}

Food.prototype.setSafety = function(safety) {
 this.safe = safety;
}
module.exports = Food;
