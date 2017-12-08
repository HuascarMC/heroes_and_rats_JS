const Hero = function(name, health, favFood) {
 this.name = name;
 this.health = health;
 this.favFood = favFood;
 this.tasks = [];
}

Hero.prototype.eat = function(food) {
 this.health = food.replenishment;
}

module.exports = Hero;
