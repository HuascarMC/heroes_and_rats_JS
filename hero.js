const Hero = function(name, health, favFood) {
 this.name = name;
 this.health = health;
 this.favFood = favFood;
 this.tasks = [];
}

Hero.prototype.eat = function(food) {
 if(this.favFood = food.name) {
  return this.health = (food.replenishment * 1.5);
 }
 this.health = food.replenishment;
}

Hero.prototype.add = function(task) {
 this.tasks.push(task);
}
module.exports = Hero;
